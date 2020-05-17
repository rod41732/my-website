---
title: "dynamic wallaper with crontab"
subtitle: "Make you own Dynamic Wallpaper just like macOS"
date: "2019-07-15"
image: "doge.png"
tags: ["Scripting"]
---

# เปลี่ยน Wallpaper อัตโนมัติด้วย cronjob และ bash script

เปลี่ยน Wallapaper ตามเวลาเหมือน macOS Mojave

> Cronjob เป็นระบบที่ใช้รันโปรแกรมโดยอัตโนมัติ โดยตั้งเวลาได้
> เราเลยใช้ cronjob เพื่อเปลี่ยนรูปภาพตามเวลานั่นเอง

### X steps

- เตรียมรูป
- bash script
- cron job

## 0. เตรียมรูป

โหลดรูปจาก [ที่นี่](www.google.com) ได้เลย
เสร็จแล้วแตกไฟล์ไปที่ `/home/<name>/xxxxx`

## 1. bash scrpit

เขียน script

```bash
#!/bin/bash
DBUS=$(ps aux | egrep "/gnome-session/.*\s--session=" | awk '{print $2}')
export $(strings /proc/$DBUS/environ | egrep DBUS_SESSION_BUS_ADDRESS)

gsettings set org.gnome.desktop.background picture-uri "file:///$HOME/mojave_dynamic/mojave_dynamic_$(($(date +%H)*2/3+1)).jpeg"
```

> จากนั้น save ไปที่ `~/mojave_dynamic/change-wp.sh`
