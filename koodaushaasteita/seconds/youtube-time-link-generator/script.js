/* A program that, when a user inputs a YouTube URL and a time (hours, minutes, seconds), 
generates and displays a new YouTube link starting at the specified playback time. */

document.getElementById('generateButton').addEventListener('click', function () {
    // 入力値を取得
    var url = document.getElementById('url').value;
    var hours = parseInt(document.getElementById('hours').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;
  
    // YouTube URLの形式が正しいか確認
    if (!url || (url.indexOf("youtu") === -1 && url.indexOf("youtube") === -1)) {
      alert("Please enter a valid YouTube URL.");
      return;
    }
  
    // 時間を秒に変換
    var totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  
    // 新しいURLを生成
    var separator = url.indexOf("?") !== -1 ? "&" : "?";
    var timeUrl = url + separator + "t=" + totalSeconds;
  
    // リンクを表示
    var linkElement = document.getElementById('generatedLink');
    linkElement.href = timeUrl;
    linkElement.style.display = "inline-block";
    linkElement.textContent = "Open Generated Link";

    // 作成されたリンクをテキストとして表示
    var displayLink = document.getElementById('displayLink');
    displayLink.textContent = "Generated Link: " + timeUrl;
    displayLink.style.display = "block"; // 表示する
  });
  