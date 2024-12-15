import QRious from "qrious";

export function createQRCode(text) {
  const qrcode = new QRious({ size: 300 });
  qrcode.value = text;
  return qrcode.toDataURL();
}

export function downloadQRCode(dataURL, filename = "qrcode.png") {
  const img = document.createElement("a");
  img.href = dataURL;
  img.download = filename;
  img.click();
}
