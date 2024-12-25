var APP_DATA = {
  "scenes": [
    {
      "id": "0-dnevni-borovak",
      "name": "Dnevni borovak",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.428345853056726,
        "pitch": 0.03976652913694956,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 3.13392010855605,
          "pitch": 0.08434160909832933,
          "rotation": 0,
          "target": "2-kuhinja"
        },
        {
          "yaw": 0.2279755587583736,
          "pitch": 0.16111858768054077,
          "rotation": 0,
          "target": "4-terasa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-spavaa-soba",
      "name": "Spavača soba",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.258093532818144,
        "pitch": 0.011867952349948752,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -2.5486688947758793,
          "pitch": 0.05458487747481655,
          "rotation": 0,
          "target": "4-terasa"
        },
        {
          "yaw": 0.9114541921754942,
          "pitch": 0.06154425928762919,
          "rotation": 0,
          "target": "3-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kuhinja",
      "name": "Kuhinja",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.7349988092980979,
        "pitch": 0.047819069177148066,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.205586779988252,
          "pitch": 0.315208894261211,
          "rotation": 0,
          "target": "3-hodnik"
        },
        {
          "yaw": -2.448179716682583,
          "pitch": 0.2898273049354607,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hodnik",
      "name": "Hodnik",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.643264415409698,
        "pitch": 0.0906060857822073,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.2086080188804225,
          "pitch": 0.0576742637065184,
          "rotation": 0,
          "target": "1-spavaa-soba"
        },
        {
          "yaw": -3.056252143657815,
          "pitch": 0.3039915631670169,
          "rotation": 0,
          "target": "2-kuhinja"
        },
        {
          "yaw": -2.555938337712627,
          "pitch": 0.1638621183773452,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        },
        {
          "yaw": 1.7922342475328978,
          "pitch": 0.05262168496389208,
          "rotation": 0,
          "target": "5-kupatilo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terasa",
      "name": "Terasa",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.6857517558322623,
        "pitch": -0.01178113006956849,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -2.663892854345189,
          "pitch": 0.3362620061002488,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        },
        {
          "yaw": 1.8469450124486295,
          "pitch": 0.04862150058736603,
          "rotation": 0,
          "target": "1-spavaa-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kupatilo",
      "name": "Kupatilo",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.9327998938454023,
        "pitch": 0.16186796722405816,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -0.909016462949694,
          "pitch": 0.010304929282238362,
          "rotation": 0,
          "target": "3-hodnik"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
