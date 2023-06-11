var tipuesearch = {"pages": [{'title': 'About', 'text': '四設計二甲 \n 倉儲: https://github.com/mdecd2023/2a3-pj3ag5 \n 簡報 \n 組長:\xa0 \n 41023154 \n http://[2001:288:6004:17:5::8]:23020/ \n 成員: \n 41023102 \n http://[2001:288:6004:17:5::1]:23020/ \n \n 41023105 \n http://[2001:288:6004:17:5::2]:23020/ \n \n 41023107 \n http://[2001:288:6004:17:5::3]:23020/ \n \n 41023109 \n http://[2001:288:6004:17:5::4]:23020/ \n \n 41023133 \n http://[2001:288:6004:17:5::5]:23020/ \n \n 41023135 \n http://[2001:288:6004:17:5::6]:23020/ \n \n 41023140 \n http://[2001:288:6004:17:5::7]:23020/ \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'pj3分工表', 'text': '1.場地設置 41023133 41023135 \n 2.車子設計與組裝 41023109 41023135 \n 3.輪盤記分板繪製 41023102\xa0 \n 4.輪盤記分板程式 41023140 41023154 \n 5.車子控制程式與設置 41023105 41023107 \n 6.LaTeX: 41023140 \n 7.成品主機: 41023154 \n', 'tags': '', 'url': 'pj3分工表.html'}, {'title': '分組報告', 'text': '以cmsimde 建立 .tex 分組的文字檔案 \n /downloads/cd_report (6).pdf \n \n 報告連結: https://github.com/mdecd2023/2a3-pj3ag5/releases \n', 'tags': '', 'url': '分組報告.html'}, {'title': 'w13', 'text': '\n pj2檔案: /downloads/bubbleRob_NX2.ttt \n 0515會議記錄 : \n 一. 討論分工，設置分工表並討論分配工作。 \n 二. 41023133繪出場景圖，大家針對需改良處分別提出建議。 \n 三. 放入 CoppeliaSim 大家針對大小討論並調整。 \n 四. 針對球員大致設計討論。 \n', 'tags': '', 'url': 'w13.html'}, {'title': '心得', 'text': '\n 41023133: \n 這個禮拜在分配各個組員負責的事項，我被分配到的部分是場景，已經畫出來了，接下來要開始寫程式了。 \n 下面附上場景的檔案 "場景" \n \n \n \n \n \n 41023140: \n 建立完分工表後，組員間討論實際分工的工作分配，這次被分配到製作LaTeX報告，還在摸索中。 \n \n \n \n \n \n', 'tags': '', 'url': '心得.html'}, {'title': 'w14', 'text': '0522會議紀錄: \n 1.針對對戰的兩組球員大小樣貌進行確認 \n 2.記分板齒輪進度討論 \n 3.球場改良後樣貌討論 \n 4.測試組員是否正常連接主機IP位置 \n ............................................................... \n 今天先用舊場景測試能否連線對戰: \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '0529會議紀錄: \n 1.Latex 問題修正，並討論完成後的問題分工 \n 2.輪盤記分板放入coppeliaSim，順利完成齒輪傳動即可完成進度 \n 3.將已完成的球員與場景結合 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'pj3', 'text': '場景加機器人結合( 檔案.ttt ) \n 機器人 \n 機器人控制檔 \n 機器人前置檔 \n pj3機器人.ttt \n romoteAPI控制檔 \n 場景: \n \n 轉盤式記分板參考: https://mdecd2023.github.io/2a3-pj3ag4/content/pj3.html \xa0 \n 問題: [CoppeliaSim:warning]   Detected\xa0dynamically\xa0enabled,\xa0non-convex\xa0shapes.\xa0Those\xa0might\xa0drastically\xa0slow\xa0down\xa0simulation,\xa0and\xa0introduce\xa0unstable\xa0behaviour. 非凸形狀在模擬中可能會導致不穩定的行為，並且會增加計算負擔。盡量避免使用非凸形狀，或者進行相應的優化和調整，以確保模擬的正確性和效率。 \n 上述導致模擬時畫面和足球機器人非常卡頓。(問題已解決) \n 問題解決方式>疆場景中球場上的球門外觀造型改得較為簡單，一開始的球門上有著很密集的小孔所以導致發生上方所述的問題。因此將外觀改善後，就能夠正常模擬了。 \n 更改後檔案: 新的球員控制檔和前置檔.7z \n', 'tags': '', 'url': 'pj3.html'}, {'title': '場景設計', 'text': '1.大致上先設計足球場的場景出來了，給老師和組員看過，一起討論看看還要做些什麼修改。 \n \n 場景檔案 \n 後來經過幾次嘗試發現，場景畫得太細陣列挖孔太多會造成檔案太大，在模擬的後會造成卡頓的現象，所以後來就把場景重新修改，把網子的部分改掉了，問題也解決了。 \n \n 新版場景 \n', 'tags': '', 'url': '場景設計.html'}, {'title': '球員設計', 'text': '一版 \n 簡單設計出車子的外型，增加美觀外還兼具控制球的功能。 \n \n \xa0\xa0\xa0\xa0 還在改良能做出妨礙敵隊球員並更方便控制球的球員，方向是: \n 1.縮小本體體積， \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 改在0.15m的範圍下伸出長竿阻撓敵人(不過也可能卡到自己人就是了xD)。 \n 2.第二種機器人，體型較大，尺寸:0.2m*0.2m*0.2m，有較大的空間去搶足球 \n \n 機器人2.STL \n', 'tags': '', 'url': '球員設計.html'}, {'title': '計分板設計', 'text': "在計分板設計上，我們採用齒輪傳動方式，帶動數字轉盤，使其能夠輕鬆且準確的調整分數。下圖為計分板。 \n 記分板 \n \n 計分板程式: \n function sysCall_init()\n\n\n    sensor = sim.getObject('/sensor1')\n    sensor = sim.getObject('/sensor2')\n    a1=sim.getObject('/scorebord/board_a/joint[1]')\n    a2=sim.getJointTargetPosition(a1)\n    b1=sim.getObject('/scorebord/board_b/joint[1]')\n    b2=sim.getJointTargetPosition(b1)\nend\n\n\n\nfunction sysCall_actuation()\n    sensor1 = sim.getObject('/sensor1')\n    sensor2 = sim.getObject('/sensor2')\n    result1=sim.readProximitySensor(sensor1)\n    result2=sim.readProximitySensor(sensor2)\n    --if (result1>0)then\n\n\n    if (result1>0)then\n        a3=a2+36*math.pi/180\n        sim.setJointTargetPosition(a1,a3)\n        a2=a3\n    elseif (result2>0)then\n        b3=b2+36*math.pi/180\n        sim.setJointTargetPosition(b1,b3)\n        b2=b3\n \n    end\n        \n\nend \n", 'tags': '', 'url': '計分板設計.html'}, {'title': 'w16', 'text': '0605會議紀錄: \n Latex 進度分工 \n \xa0 \n', 'tags': '', 'url': 'w16.html'}]};