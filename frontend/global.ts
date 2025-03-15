// Find user devices
export const getDeviceType = () => {
  const devicesRgx = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
  const isDeviceMobile = devicesRgx.test(window.navigator.userAgent)

  return isDeviceMobile ? "Mobile" : "Desktop"
}

// Find window scrollbar width
export const getScrollbarWidth = () => {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  outer.appendChild(inner);

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
}
