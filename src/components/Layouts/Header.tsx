/* eslint-disable react-hooks/exhaustive-deps */
import { ColorSchemeToggle } from "../Common/ColorSchemeToggle";
import { Header, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

const HEADER_HEIGHT = 90;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#22272B",
  },

  header: {
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    borderBottom: "0px",
  },
}));

export default function NavigationHeader() {
  const { classes } = useStyles();

  return (
    <div className="fixed top-0 z-[100] w-full">
      <Header height={HEADER_HEIGHT} className={`${classes.root} !border-b-0`}>
        <div className="flex justify-between items-center h-full mx-5 lg:mx-10">
          <div className="">
            <Link to="/">
              {/* <Image
                alt="logo"
                height={25}
                src="/https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              /> */}
              logo
            </Link>
          </div>
          <div className="flex justify-end items-center text-sm">
            <div className="flex justify-start items-center mb-6 mr-4">
              <ColorSchemeToggle />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
