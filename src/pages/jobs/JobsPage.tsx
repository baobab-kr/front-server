import React, { useState, useEffect, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import {
  MainBanner,
  SearchArea,
  BannerTitle,
  BannerDesc,
  BannerImageArea,
  LinkBtn,
  Wrapper,
  WrapperInner,
  NavArea,
  ContentArea,
  ItemTitleArea,
  ItemArea,
  SearchItem,
  CustomInput,
  Title,
  SearchAccordion,
  DateButton,
} from "./style";
import BannerImage from "../../assets/JobBanner.jpg";

import { Board } from "Types/main";
import InfiniteScroll from "../../components/InfiniteScroll";
import Category from "./Category/Category";
import { getMainBoard } from "../../api/board";
import JobCard from "../../components/JobCard/JobCard";
import { user } from "Types/user";
import { IoBusinessSharp } from "react-icons/io5";
import LocationSelector from "components/LocationSelector/LocationSelector";
import Select from "react-select";
import { JOB_GROUP, USER_TYPE, USER_TYPE_SELECT, CAREER_TYPE_SELECT } from "constants/index";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import moment from "moment";
import { BsCaretDownFill, BsCaretUpFill, BsSearch } from "react-icons/bs";
import { getJobsBoardAll } from "api/jobs";
import { tJob } from "Types/Jobs";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

type tProps = { value: string | number; label: string };
const formatOptionLabel = ({ value, label }: tProps) => (
  <div style={{ display: "flex", color: "black" }}>
    <div>{label}</div>
  </div>
);

export default function JobsPage(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const navigate = useNavigate();
  const ulocation = useLocation();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [board, setBoard] = useState<tJob[]>([]);
  const [mainState, setMainState] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [job, setJob] = useState<tProps | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [companyName, setCompanyName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [careerType, setCareerType] = useState<tProps | null>(null);
  const clear = () => {
    // window.location.reload();
    setLocation("");
    setJob(null);
    setStartDate(null);
    setEndDate(null);
    setCompanyName("");
    setTitle("");
    setCareerType(null);
    navigate("/jobs");
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setPage(0);
    setMainState(false);
    setBoard([]);
  }, [ulocation]);

  const locationHandler = (_locaton: string) => {
    setLocation(_locaton);
  };

  const jobHandler = (props: any) => {
    setJob(props);
  };

  const setCareerTypebHandler = (props: any) => {
    setCareerType(props);
  };

  const getInfo = async () => {
    if (mainState) return;

    const searchBody: any = {
      page: page,
      ...queryParse(ulocation.search),
    };

    await getJobsBoardAll(searchBody)
      .then((data) => {
        setPage(page + 1);

        const t = [...board, ...data].reduce((acc: any, val: any) => {
          acc[val.id] = val;
          return acc;
        }, {});

        setBoard(Object.values(t));
      })
      .catch((err) => {
        setMainState(true);
      });
  };

  const navagateBusiness = () => {
    navigate("/business");
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }: any, ref: any) => (
    <DateButton onClick={onClick} ref={ref}>
      {value}
    </DateButton>
  ));

  const submit = async () => {
    let query: string = "";

    if (location !== "") query += `?location=${location}`;
    if (title !== "") query += `?title=${title}`;
    if (job !== null) query += `?field=${job.label}`;
    if (careerType !== null) query += `?careerType=${careerType?.value}`;
    if (startDate !== null) query += `?startDate=${moment(startDate).format("YYYYMMDD")}`;
    if (endDate !== null) query += `?endDate=${moment(endDate).format("YYYYMMDD")}`;
    if (companyName !== "") query += `?companyName=${companyName}`;

    navigate("/jobs" + query);
  };

  const queryParse = (str: string): any => {
    const temp: string[] = str.split("?");
    const buff: any = {};
    temp.forEach((q) => {
      if (q !== "") {
        const t = q.split("=");
        buff[t[0]] = t[1];
      }
    });
    return buff;
  };

  const fallback = () => {
    return (
      <div style={{ height: "150px", textAlign: "center", color: "black" }}>
        <PuffLoader color="#FF0000" />
      </div>
    );
  };

  return (
    <Suspense fallback={() => fallback()}>
      <div style={{ zIndex: "1", height: "100%" }}>
        <MainBanner>
          <div>
            <BannerImageArea>
              <img
                style={{ backfaceVisibility: "hidden", height: "100%", objectFit: "cover", objectPosition: "center", width: "100%" }}
                src={BannerImage}
                alt="banner"
              />
            </BannerImageArea>
            {userInfo?.role === USER_TYPE.HEADHUNTER && (
              <BannerTitle>
                <h1 style={{ fontSize: "30px" }}>새로운 인재를 찾고 있나요?</h1>
                <LinkBtn onClick={navagateBusiness}>채용 광고 신청하러 가기</LinkBtn>
              </BannerTitle>
            )}
            <BannerDesc></BannerDesc>
          </div>
        </MainBanner>
        <Wrapper>
          <WrapperInner>
            <ContentArea>
              <p style={{ marginBottom: "15px" }} onClick={() => setIsOpen(!isOpen)}>
                필터
                {!isOpen ? <BsCaretUpFill style={{ marginLeft: "10px" }} /> : <BsCaretDownFill style={{ marginLeft: "10px" }} />}
              </p>
              <SearchAccordion>
                <SearchArea className={`accordion ${isOpen ? "active" : ""}`}>
                  <SearchItem>
                    <BsSearch color="#dddddd" style={{ position: "absolute", top: "14px", left: "15px" }} />
                    <CustomInput
                      placeholder="제목 검색"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </SearchItem>
                  <SearchItem>
                    <IoBusinessSharp color="#dddddd" style={{ position: "absolute", top: "14px", left: "15px" }} />
                    <CustomInput
                      placeholder="회사 이름 검색"
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                    />
                  </SearchItem>
                  <SearchItem style={{ paddingTop: "5px" }}>
                    <div style={{ width: "100%", display: "flex", gap: "15px", alignItems: "center", fontSize: "14px" }}>
                      <Title>직군</Title>
                      <div style={{ width: "270px" }}>
                        <Select options={JOB_GROUP} formatOptionLabel={formatOptionLabel} onChange={jobHandler} value={job} />
                      </div>
                    </div>
                  </SearchItem>
                  <SearchItem>
                    <div style={{ width: "100%", display: "flex", gap: "15px", alignItems: "center", fontSize: "14px" }}>
                      <Title>기간</Title>
                      <div
                        style={{
                          color: "red",
                          display: "flex",
                          padding: "13px",
                          border: "1px solid #35363b",
                          borderRadius: "9px",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date!)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="yyyy년 MM월 dd일"
                            locale={ko}
                            customInput={<ExampleCustomInput />}
                          />
                        </div>
                        <div style={{ width: "10px", height: "2px", background: "#35363b" }}></div>
                        <div>
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date!)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat="yyyy년 MM월 dd일"
                            locale={ko}
                            customInput={<ExampleCustomInput />}
                          />
                        </div>
                      </div>
                    </div>
                  </SearchItem>
                  <SearchItem style={{ paddingTop: "5px" }}>
                    <div style={{ width: "100%", display: "flex", gap: "15px", alignItems: "center", fontSize: "14px" }}>
                      <Title>경력</Title>
                      <div style={{ width: "253px" }}>
                        <Select options={CAREER_TYPE_SELECT} formatOptionLabel={formatOptionLabel} onChange={setCareerTypebHandler} value={careerType} />
                      </div>
                    </div>
                  </SearchItem>
                  <SearchItem style={{ paddingTop: "5px" }}>
                    <LocationSelector value={location} setValue={locationHandler} />
                  </SearchItem>
                </SearchArea>

                {!isOpen && (
                  <div style={{ display: "flex", gap: "15px", borderTop: "1px solid white", paddingTop: "10px", marginTop: "15px" }}>
                    <div style={{ cursor: "pointer" }} onClick={clear}>
                      초기화
                    </div>
                    <div style={{ cursor: "pointer" }} onClick={submit}>
                      적용
                    </div>
                  </div>
                )}
              </SearchAccordion>

              <div>
                <ItemTitleArea>
                  <span>전체 채용</span>
                </ItemTitleArea>
                <ItemArea>
                  <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState} isOnTop={true}>
                    {board?.map((item: tJob, index: number) => {
                      return (
                        <JobCard
                          key={index}
                          jobItem={item}
                          board={item.id}
                          width={windowSize.innerWidth > 1810 ? "320px" : "300px"}
                          height={windowSize.innerWidth > 1810 ? "330px" : "310px"}
                          imgHeight={"45%"}
                          isMyHome={false}
                          previewLogo={""}
                          deleteBoard={() => {}}
                        />
                      );
                    })}
                  </InfiniteScroll>
                </ItemArea>
              </div>
            </ContentArea>
          </WrapperInner>
        </Wrapper>
      </div>
    </Suspense>
  );
}
