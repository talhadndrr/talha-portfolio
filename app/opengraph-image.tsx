import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hüseyin Talha Dündar yazılım geliştirici portföyü";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#060608",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            left: "-170px",
            top: "-190px",
            borderRadius: "999px",
            background: "rgba(124,58,237,0.34)",
            filter: "blur(110px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "470px",
            height: "470px",
            right: "-140px",
            bottom: "-210px",
            borderRadius: "999px",
            background: "rgba(34,211,238,0.22)",
            filter: "blur(110px)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                color: "#060608",
                fontSize: "24px",
              }}
            >
              TD
            </div>
            Hüseyin Talha Dündar
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "25px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#a78bfa",
                marginBottom: "24px",
              }}
            >
              Yazılım geliştirici · Portföy
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "76px",
                lineHeight: 0.98,
                fontWeight: 750,
                letterSpacing: "-0.045em",
              }}
            >
              <span>Dijital fikirleri</span>
              <span style={{ color: "#c084fc" }}>deneyime dönüştürüyorum.</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#94a3b8",
              fontSize: "24px",
            }}
          >
            <span>Web geliştirme · Yazılım · Veritabanı</span>
            <span>talhadundar.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
