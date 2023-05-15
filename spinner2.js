let printOut = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n']
for (let i = 0; i < printOut.length; i++) {
  setTimeout(() => {
    process.stdout.write(printOut[i]);
  }, (200*i));
}
