document
  .getElementById("connect-btn")
  .addEventListener("click", connectToBLEDevice);

function connectToBLEDevice() {
  // In a real implementation, this would use Web Bluetooth API
  console.log("Connecting to BLE device...");
  updateSensorData({
    temperature: 22.5,
    humidity: 45,
    co2: 650,
    voc: 120,
  });
}

function updateSensorData(data) {
  // Temperature
  document.getElementById("temp-value").textContent = `${data.temperature}°C`;
  document.getElementById("temp-status").className =
    data.temperature > 25
      ? "status-indicator poor"
      : data.temperature > 20
      ? "status-indicator moderate"
      : "status-indicator good";

  // Humidity
  document.getElementById("humidity-value").textContent = `${data.humidity}%`;
  document.getElementById("humidity-status").className =
    data.humidity > 60
      ? "status-indicator poor"
      : data.humidity > 40
      ? "status-indicator moderate"
      : "status-indicator good";

  // CO2
  document.getElementById("co2-value").textContent = `${data.co2} ppm`;
  document.getElementById("co2-status").className =
    data.co2 > 1000
      ? "status-indicator poor"
      : data.co2 > 600
      ? "status-indicator moderate"
      : "status-indicator good";

  // VOC
  document.getElementById("voc-value").textContent = `${data.voc} ppb`;
  document.getElementById("voc-status").className =
    data.voc > 200
      ? "status-indicator poor"
      : data.voc > 100
      ? "status-indicator moderate"
      : "status-indicator good";
}
