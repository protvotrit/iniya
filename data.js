var APP_DATA = {
  "scenes": [
    {
      "id": "0-----",
      "name": "Вид с причала на судно",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.10661479663998996,
        "pitch": 0.014957133494505115,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": -0.8220769112648689,
          "pitch": 0.001789770801105206,
          "rotation": 0,
          "target": "1--"
        },
        {
          "yaw": -0.524759582155994,
          "pitch": 0.0023917770598824717,
          "rotation": 0,
          "target": "2--"
        },
        {
          "yaw": -0.056584837879274374,
          "pitch": 0.014737084919417498,
          "rotation": 0,
          "target": "3-vip-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6018586124331549,
          "pitch": 0.04317387650731597,
          "title": "<br>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Современное судно «ИНИЯ» работает на экскурсионных маршрутах Псковской области. Судно закрытого типа со сплошной надстройкой и увеличенной обзорностью за счет панорамного остекления. Число пассажиров — 54 человека. Развивает скорость до 30 км/ч</font></font>"
        }
      ]
    },
    {
      "id": "1--",
      "name": "Палуба ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.0924293328339871,
        "pitch": 0.08796986465237566,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": -0.9873849666569363,
          "pitch": 0.17641243776269278,
          "rotation": 0,
          "target": "0-----"
        },
        {
          "yaw": -2.0620671681490883,
          "pitch": 0.03628599950138778,
          "rotation": 0,
          "target": "2--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--",
      "name": "Общий салон",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.4276188267932284,
        "pitch": 0.12300974733678771,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": 2.4276188267932284,
          "pitch": 0.12300974733678771,
          "rotation": 0,
          "target": "1--"
        },
        {
          "yaw": -0.6685530657032182,
          "pitch": 0.19104931407972003,
          "rotation": 0,
          "target": "3-vip-"
        },
        {
          "yaw": 0.9221646511776846,
          "pitch": 0.026530950970412803,
          "rotation": 0,
          "target": "0-----"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7683915821689062,
          "pitch": -0.0697604799938869,
          "title": "<br>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Пассажиров во время прогулок сопровождает аудиогид. Панорамное остекление позволяет детально рассмотреть привычные достопримечательности с нового ракурса в мельчайших деталях</font></font></font></font></font></font></font></font>"
        }
      ]
    },
    {
      "id": "3-vip-",
      "name": "VIP-салон",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -2.520375724128556,
        "pitch": 0.41147485887032786,
        "fov": 1.3401592523986738
      },
      "linkHotspots": [
        {
          "yaw": 2.4275477010212096,
          "pitch": 0.18075767384981845,
          "rotation": 0,
          "target": "2--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1157721483794383,
          "pitch": -0.018375585092952562,
          "title": "<br>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">На судне предусмотрен салон повышенного класса, дающий возможность насладиться великолепными видами из мягких кресел в приватной зоне, которая отделена от основной части судна</font></font></font></font>"
        }
      ]
    }
  ],
  "name": "Iniya",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
