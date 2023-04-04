export function hexToRGB(
 h: string | undefined,
 opacity: string
) {
 let r: any = 0,
  g: any = 0,
  b: any = 0;

 // 3 digits
 if (h?.length == 4) {
  r = "0x" + h[1] + h[1];
  g = "0x" + h[2] + h[2];
  b = "0x" + h[3] + h[3];

  // 6 digits
 } else if (h?.length == 7) {
  r = "0x" + h[1] + h[2];
  g = "0x" + h[3] + h[4];
  b = "0x" + h[5] + h[6];
 }

 return `rgb(${+r} ${+g} ${+b} / ${opacity})`;
}
