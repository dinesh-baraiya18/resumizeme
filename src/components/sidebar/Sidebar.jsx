"use client";
import "./sidebar.css";
import Image from "next/image";
import { logo } from "../../assets/images/contant";
import {
  ClockIcon,
  FileIcon,
  BoardIcon,
  SearchIcon,
  PlusIcon,
  SettingIcon,
  MenuIcon,
} from "@/icons/icons";
import StarIcon from "../../assets/icons/star.png";
import ColorBoardIcon from "../../assets/icons/boards.png";
import LockIcon from "../../assets/icons/lock.png";
import avatar from "../../assets/images/avatar-small.png";
import { useState } from "react";

const favSearch = [
  {
    query: "Software Engineer",
  },
  {
    query: "Computer hardware engineer",
  },
  {
    query: "Network Engineer",
  },
  {
    query: "Technical Support",
  },
  {
    query: "Network administrator",
  },
  {
    query: "Management",
  },
  {
    query: "Data analysis",
  },
  {
    query: "Computer technician",
  },
];

const historySearch = [
  {
    query: "Past search 1",
  },
  {
    query: "Past search 2",
  },
  {
    query: "Computers and information",
  },
  {
    query: "Database Administrator",
  },
  {
    query: "Computer security",
  },
  {
    query: "Computer Systems Analyst",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={isOpen ? "menubar open" : "menubar"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MenuIcon color="#fff" size={24} />
      </button>
      <aside className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="logo-wrapper">
          <Image src={logo} width={0} height={0} alt="logo" />
        </div>
        <div className="links-wrapper">
          <ul className="links">
            <li>
              <a href="#">
                <FileIcon />
                <span>My templates</span>
              </a>
            </li>
            <li className="search">
              <a href="#">
                <SearchIcon />
                <span>Search</span>
              </a>
              <ul>
                {favSearch?.map(({ query }) => (
                  <li key={query}>
                    <Image
                      src={StarIcon}
                      width={0}
                      height={0}
                      alt="Star Icon"
                    />
                    <span>{query}</span>
                  </li>
                ))}
              </ul>
              <ul>
                {historySearch?.map(({ query }) => (
                  <li key={query}>
                    <ClockIcon />
                    <span>{query}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li className="my-boards">
              <div className="title">
                <a href="#">
                  <BoardIcon />
                  <span>My boards</span>
                </a>
                <PlusIcon />
              </div>

              <ul>
                <li>
                  <Image
                    src={ColorBoardIcon}
                    width={0}
                    height={0}
                    alt="Board Icon"
                  />
                  <span>Board 1</span>
                </li>
                <li>
                  <Image
                    src={ColorBoardIcon}
                    width={0}
                    height={0}
                    alt="Board Icon"
                  />
                  <span>Board 2</span>
                </li>
                <li>
                  <Image
                    src={ColorBoardIcon}
                    width={0}
                    height={0}
                    alt="Board Icon"
                  />
                  <span>Board 3</span>
                </li>
                <li>
                  <Image src={LockIcon} width={0} height={0} alt="Board Icon" />
                  <span>Board agent 1</span>
                </li>
                <li>
                  <Image src={LockIcon} width={0} height={0} alt="Board Icon" />
                  <span>Board agent 1</span>
                </li>
                <li>
                  <Image src={LockIcon} width={0} height={0} alt="Board Icon" />
                  <span>Board agent 1</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className="sidebar-profile"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Image src={avatar} width={0} height={0} alt="profile" />
            <span>Carla</span>
          </div>
          <button className="setting-icon">
            <SettingIcon />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
