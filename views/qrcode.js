<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>QR Code Generator</title>
  </head>
  <body>
    <h1>QR Code Generator</h1>
    <form>
      <label for="table-number">Enter table number:</label>
      <input type="number" id="table-number" name="table-number" required />
      <button type="submit" id="generate-qr-btn">Generate QR Code</button>
    </form>
    <div id="qr-code"></div>

    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.4.4/qrcode.min.js"></script>
  </body>
</html>
