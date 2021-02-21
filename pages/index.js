import Head from "next/head";
import styles from "../styles/Home.module.css";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import animationData from "../lottie/46845-contact.json";
import Lottie from "react-lottie";

export default function Home() {
  console.log(animationData);
  return (
    <div>
      <Head>
        <title>A.R.K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={[styles.nav].join(" ")}>
        <div className={styles.blueRibbon}></div>
        <div className={[styles.navInner, styles.container].join(" ")}>
          <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Ahmed.R.K
          </span>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              flexGrow: 0.5,
              flexShrink: 0,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <a className={styles.navLink} href="asa">
              Home
            </a>

            <a className={styles.navLink} href="asa">
              Portfolio
            </a>

            <a className={styles.navLink} href="asa">
              About Me
            </a>

            <a className={styles.navLink} href="asa">
              Contact
            </a>

            <button
              style={{
                borderWidth: 0,
                borderRadius: 6,
                backgroundColor: "#254DD8",
                height: 40,
                width: 120,
                color: "white",
                cursor: "pointer",
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      <main className={styles.container} style={{ marginTop: "3em" }}>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 0.5 }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "3.0em",
                color: "white",
                marginBottom: 32,
                lineHeight: "1.125em",
              }}
            >
              I Build Web Apps
              <br />
              That <span className={styles.grad}>Perform</span>
            </p>
            <p style={{ color: "#CCCCCC", fontSize: "1.2em" }}>
              React/Native Developer from ISB, PK
            </p>
            <div style={{ display: "flex", marginTop: 24 }}>
              <div style={{ marginRight: 32 }}>
                <Image src="/images/github.svg" width={24} height={24} />
              </div>

              <div style={{ marginRight: 32 }}>
                <Image src="/images/linkedin.svg" width={24} height={24} />
              </div>

              <div style={{ marginRight: 32 }}>
                <Image src="/images/dev-dot-to.svg" width={30} height={30} />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 32 }}>
              <button
                style={{
                  background: "#254DD8",
                  height: 45,
                  borderWidth: 0,
                  borderRadius: 5,
                  width: 208,
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 24,
                }}
              >
                See My Work
                <div style={{ marginLeft: 8 }}>
                  <Image src="/images/arrow-down.svg" width={16} height={16} />
                </div>
              </button>
              <button
                style={{
                  background: "#22273A",
                  height: 45,
                  borderWidth: 0,
                  borderRadius: 5,
                  width: 150,
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                About Me
              </button>
            </div>
          </div>
          <div style={{ flex: 0.5, display: "flex" }}>
            {/* <Tilt
              trackOnWindow={true}
              reset={false}
              tiltReverse={false}
              gyroscope={true}
            > */}
            <Lottie
              isClickToPauseDisabled={true}
              options={{
                animationData: animationData,
                rendererSettings: {
                  progressiveLoad: true,
                  clearCanvas: true,
                  preserveAspectRatio: true,
                },
              }}
              style={{
                marginTop: 0,
                width: 450,
                height: 450,
                margin: "none !important",
                marginTop: -60,
              }}
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="397.833"
                height="348.5"
                viewBox="0 0 397.833 348.5"
              >
                <g
                  id="Group_14"
                  data-name="Group 14"
                  transform="translate(-1059.566 -140.766)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M0,0H137.148V169.436H0Z"
                    transform="translate(1457.399 140.766) rotate(90)"
                    fill="rgba(154,108,158,0.16)"
                  />
                  <rect
                    id="Rectangle_8"
                    data-name="Rectangle 8"
                    width="286.655"
                    height="242.992"
                    transform="translate(1394.905 202.611) rotate(90)"
                    fill="rgba(154,108,158,0.16)"
                  />
                  <rect
                    id="Rectangle_9"
                    data-name="Rectangle 9"
                    width="98.083"
                    height="127.824"
                    transform="translate(1385.413 299.429) rotate(90)"
                    fill="rgba(154,108,158,0.16)"
                  />
                  <rect
                    id="Rectangle_10"
                    data-name="Rectangle 10"
                    width="124.66"
                    height="208.189"
                    transform="translate(1267.755 146.885) rotate(90)"
                    fill="rgba(154,108,158,0.16)"
                  />
                  <rect
                    id="Rectangle_11"
                    data-name="Rectangle 11"
                    width="98.083"
                    height="237.93"
                    transform="translate(1327.476 348.623) rotate(90)"
                    fill="rgba(154,108,158,0.16)"
                  />
                </g>
              </svg> */}
            {/* </Tilt> */}
          </div>
        </section>

        <section>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.5em",
              color: "white",
            }}
          >
            Projects
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // justifyContent: "space-evenly",
            }}
          >
            <div className={styles.card}>
              <div style={{ background: "#111111", borderRadius: 3 }}>
                <div style={{ height: 150, position: "relative" }}>
                  <Image
                    layout="fill"
                    src="/images/5.png"
                    objectFit="cover"

                    // style={{
                    //   width: "100%",
                    //   height: "100%",
                    //   objectFit: "cover",
                    //   borderRadius: 10,
                    // }}
                  />
                </div>
                <div style={{ padding: 16 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ fontWeight: 600 }}>COVID-19 Dashboard</p>
                    <button
                      style={{
                        background: "#22273A",
                        padding: 8,
                        borderWidth: 0,
                        borderRadius: 5,

                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Visit Site
                    </button>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image src="/images/github.svg" width={20} height={20} />
                    <span style={{ marginLeft: 8 }}>
                      git hub link over here
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <nav className={[styles.footer, styles.container].join(" ")}>
          <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Ahmed.R.K
          </span>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              flexGrow: 0.5,
              flexShrink: 0,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <a className={styles.navLink} href="asa">
              Home
            </a>

            <a className={styles.navLink} href="asa">
              Portfolio
            </a>

            <a className={styles.navLink} href="asa">
              About Me
            </a>

            <a className={styles.navLink} href="asa">
              Contact
            </a>

            <button
              style={{
                borderWidth: 0,
                borderRadius: 6,
                backgroundColor: "#254DD8",
                height: 40,
                width: 120,
                color: "white",
              }}
            >
              Hire Me
            </button>
          </div>
        </nav>
      </footer>
    </div>
  );
}
