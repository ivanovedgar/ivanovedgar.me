function modified() {
 update = new Date(document.lastModified);
Month = update.getMonth() + 1;
Date = update.getDate();
Year = update.getFullYear();
Hour = update.getHours();
Minute = update.getMinutes();
Second = update.getSeconds();

document.writeln("Last updated: " + Year + "-" + Month + "-" + Date + "  " + Hour+":"+Minute+":"+Second);
}