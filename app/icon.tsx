import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        <div style={{ flex: 1, backgroundColor: "#FFFFFF" }} />
        <div style={{ flex: 1, backgroundColor: "#DC143C" }} />
      </div>
    ),
    { ...size },
  )
}
