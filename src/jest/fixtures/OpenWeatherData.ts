const openWeather = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1610463600,
      main: {
        temp: 301.9,
        feels_like: 304.11,
        temp_min: 301.9,
        temp_max: 304.23,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 929,
        humidity: 57,
        temp_kf: -2.33,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 1.7,
        deg: 303,
      },
      visibility: 10000,
      pop: 0.9,
      rain: {
        "3h": 1.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-12 15:00:00",
    },
    {
      dt: 1610474400,
      main: {
        temp: 302.1,
        feels_like: 304.66,
        temp_min: 302.1,
        temp_max: 302.77,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 58,
        temp_kf: -0.67,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 1.52,
        deg: 193,
      },
      visibility: 10000,
      pop: 0.9,
      rain: {
        "3h": 3.87,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-12 18:00:00",
    },
    {
      dt: 1610485200,
      main: {
        temp: 300.33,
        feels_like: 302.61,
        temp_min: 300.33,
        temp_max: 300.37,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 926,
        humidity: 67,
        temp_kf: -0.04,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.37,
        deg: 130,
      },
      visibility: 6447,
      pop: 0.83,
      rain: {
        "3h": 5.54,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-12 21:00:00",
    },
    {
      dt: 1610496000,
      main: {
        temp: 297.07,
        feels_like: 298.29,
        temp_min: 297.05,
        temp_max: 297.07,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 79,
        temp_kf: 0.02,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.57,
        deg: 139,
      },
      visibility: 10000,
      pop: 0.79,
      rain: {
        "3h": 6.08,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-13 00:00:00",
    },
    {
      dt: 1610506800,
      main: {
        temp: 295.75,
        feels_like: 297.56,
        temp_min: 295.75,
        temp_max: 295.75,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 927,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 2.27,
        deg: 148,
      },
      visibility: 10000,
      pop: 0.46,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-13 03:00:00",
    },
    {
      dt: 1610517600,
      main: {
        temp: 295.14,
        feels_like: 296.07,
        temp_min: 295.14,
        temp_max: 295.14,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 925,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 3.27,
        deg: 150,
      },
      visibility: 10000,
      pop: 0.37,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-13 06:00:00",
    },
    {
      dt: 1610528400,
      main: {
        temp: 295.43,
        feels_like: 296.7,
        temp_min: 295.43,
        temp_max: 295.43,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.84,
        deg: 124,
      },
      visibility: 10000,
      pop: 0.18,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-13 09:00:00",
    },
    {
      dt: 1610539200,
      main: {
        temp: 298.18,
        feels_like: 299.4,
        temp_min: 298.18,
        temp_max: 298.18,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.99,
        deg: 110,
      },
      visibility: 10000,
      pop: 0.18,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-13 12:00:00",
    },
    {
      dt: 1610550000,
      main: {
        temp: 301.6,
        feels_like: 302.51,
        temp_min: 301.6,
        temp_max: 301.6,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 929,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.38,
        deg: 148,
      },
      visibility: 10000,
      pop: 0.82,
      rain: {
        "3h": 0.41,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-13 15:00:00",
    },
    {
      dt: 1610560800,
      main: {
        temp: 301.13,
        feels_like: 300.74,
        temp_min: 301.13,
        temp_max: 301.13,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 927,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 5.66,
        deg: 153,
      },
      visibility: 10000,
      pop: 0.94,
      rain: {
        "3h": 2.98,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-13 18:00:00",
    },
    {
      dt: 1610571600,
      main: {
        temp: 297.52,
        feels_like: 296.29,
        temp_min: 297.52,
        temp_max: 297.52,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.8,
        deg: 157,
      },
      visibility: 10000,
      pop: 0.57,
      rain: {
        "3h": 0.25,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-13 21:00:00",
    },
    {
      dt: 1610582400,
      main: {
        temp: 295.91,
        feels_like: 295.47,
        temp_min: 295.91,
        temp_max: 295.91,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.8,
        deg: 145,
      },
      visibility: 10000,
      pop: 0.71,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-14 00:00:00",
    },
    {
      dt: 1610593200,
      main: {
        temp: 295.23,
        feels_like: 295.59,
        temp_min: 295.23,
        temp_max: 295.23,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 928,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 4.01,
        deg: 135,
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-14 03:00:00",
    },
    {
      dt: 1610604000,
      main: {
        temp: 294.58,
        feels_like: 295.36,
        temp_min: 294.58,
        temp_max: 294.58,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 3.14,
        deg: 129,
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-14 06:00:00",
    },
    {
      dt: 1610614800,
      main: {
        temp: 294.31,
        feels_like: 295.57,
        temp_min: 294.31,
        temp_max: 294.31,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 927,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 2.29,
        deg: 110,
      },
      visibility: 10000,
      pop: 0.15,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-14 09:00:00",
    },
    {
      dt: 1610625600,
      main: {
        temp: 296.91,
        feels_like: 298.38,
        temp_min: 296.91,
        temp_max: 296.91,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 1.72,
        deg: 102,
      },
      visibility: 10000,
      pop: 0.19,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-14 12:00:00",
    },
    {
      dt: 1610636400,
      main: {
        temp: 301.09,
        feels_like: 302.32,
        temp_min: 301.09,
        temp_max: 301.09,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 929,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 1.91,
        deg: 126,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        "3h": 0.35,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-14 15:00:00",
    },
    {
      dt: 1610647200,
      main: {
        temp: 300.51,
        feels_like: 300.24,
        temp_min: 300.51,
        temp_max: 300.51,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 927,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 4.42,
        deg: 147,
      },
      visibility: 6833,
      pop: 0.97,
      rain: {
        "3h": 2.76,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-14 18:00:00",
    },
    {
      dt: 1610658000,
      main: {
        temp: 297.68,
        feels_like: 297.12,
        temp_min: 297.68,
        temp_max: 297.68,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 4.93,
        deg: 149,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 1.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-14 21:00:00",
    },
    {
      dt: 1610668800,
      main: {
        temp: 295.43,
        feels_like: 295.18,
        temp_min: 295.43,
        temp_max: 295.43,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 928,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 4.51,
        deg: 125,
      },
      visibility: 10000,
      pop: 0.87,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-15 00:00:00",
    },
    {
      dt: 1610679600,
      main: {
        temp: 294.32,
        feels_like: 294.7,
        temp_min: 294.32,
        temp_max: 294.32,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 928,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 3.32,
        deg: 115,
      },
      visibility: 10000,
      pop: 0.14,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-15 03:00:00",
    },
    {
      dt: 1610690400,
      main: {
        temp: 293.52,
        feels_like: 294.19,
        temp_min: 293.52,
        temp_max: 293.52,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 2.66,
        deg: 91,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-15 06:00:00",
    },
    {
      dt: 1610701200,
      main: {
        temp: 293.2,
        feels_like: 294.08,
        temp_min: 293.2,
        temp_max: 293.2,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 926,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.07,
        deg: 72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-15 09:00:00",
    },
    {
      dt: 1610712000,
      main: {
        temp: 297.03,
        feels_like: 297.64,
        temp_min: 297.03,
        temp_max: 297.03,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.32,
        deg: 43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-15 12:00:00",
    },
    {
      dt: 1610722800,
      main: {
        temp: 301.42,
        feels_like: 301.82,
        temp_min: 301.42,
        temp_max: 301.42,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 928,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 2.56,
        deg: 7,
      },
      visibility: 10000,
      pop: 0.74,
      rain: {
        "3h": 0.6,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-15 15:00:00",
    },
    {
      dt: 1610733600,
      main: {
        temp: 301.99,
        feels_like: 303.39,
        temp_min: 301.99,
        temp_max: 301.99,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 926,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 1.43,
        deg: 79,
      },
      visibility: 10000,
      pop: 0.94,
      rain: {
        "3h": 2.39,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-15 18:00:00",
    },
    {
      dt: 1610744400,
      main: {
        temp: 299.31,
        feels_like: 299.53,
        temp_min: 299.31,
        temp_max: 299.31,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 925,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 3.38,
        deg: 112,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        "3h": 3.01,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-15 21:00:00",
    },
    {
      dt: 1610755200,
      main: {
        temp: 296.81,
        feels_like: 296.99,
        temp_min: 296.81,
        temp_max: 296.81,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 3.37,
        deg: 94,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        "3h": 2.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-16 00:00:00",
    },
    {
      dt: 1610766000,
      main: {
        temp: 295.72,
        feels_like: 296.72,
        temp_min: 295.72,
        temp_max: 295.72,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 2.12,
        deg: 22,
      },
      visibility: 10000,
      pop: 0.72,
      rain: {
        "3h": 0.94,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-16 03:00:00",
    },
    {
      dt: 1610776800,
      main: {
        temp: 294.94,
        feels_like: 295.25,
        temp_min: 294.94,
        temp_max: 294.94,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 924,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 3.17,
        deg: 343,
      },
      visibility: 10000,
      pop: 0.64,
      rain: {
        "3h": 0.86,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-16 06:00:00",
    },
    {
      dt: 1610787600,
      main: {
        temp: 294.32,
        feels_like: 294.64,
        temp_min: 294.32,
        temp_max: 294.32,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 925,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.16,
        deg: 345,
      },
      visibility: 10000,
      pop: 0.22,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-16 09:00:00",
    },
    {
      dt: 1610798400,
      main: {
        temp: 297.41,
        feels_like: 296.6,
        temp_min: 297.41,
        temp_max: 297.41,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 4.7,
        deg: 353,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-16 12:00:00",
    },
    {
      dt: 1610809200,
      main: {
        temp: 300.44,
        feels_like: 298.26,
        temp_min: 300.44,
        temp_max: 300.44,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 927,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 5.92,
        deg: 360,
      },
      visibility: 10000,
      pop: 0.35,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-16 15:00:00",
    },
    {
      dt: 1610820000,
      main: {
        temp: 300.24,
        feels_like: 297.97,
        temp_min: 300.24,
        temp_max: 300.24,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 925,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 5.78,
        deg: 14,
      },
      visibility: 10000,
      pop: 0.6,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-16 18:00:00",
    },
    {
      dt: 1610830800,
      main: {
        temp: 298.23,
        feels_like: 297.22,
        temp_min: 298.23,
        temp_max: 298.23,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 925,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 4.7,
        deg: 356,
      },
      visibility: 10000,
      pop: 0.46,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-16 21:00:00",
    },
    {
      dt: 1610841600,
      main: {
        temp: 295.65,
        feels_like: 295.15,
        temp_min: 295.65,
        temp_max: 295.65,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 925,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.71,
        deg: 11,
      },
      visibility: 10000,
      pop: 0.3,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-17 00:00:00",
    },
    {
      dt: 1610852400,
      main: {
        temp: 294.58,
        feels_like: 293.82,
        temp_min: 294.58,
        temp_max: 294.58,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 925,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.77,
        deg: 14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-17 03:00:00",
    },
    {
      dt: 1610863200,
      main: {
        temp: 294.26,
        feels_like: 293.48,
        temp_min: 294.26,
        temp_max: 294.26,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 924,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.88,
        deg: 8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-01-17 06:00:00",
    },
    {
      dt: 1610874000,
      main: {
        temp: 294.05,
        feels_like: 293.14,
        temp_min: 294.05,
        temp_max: 294.05,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 924,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.18,
        deg: 359,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-17 09:00:00",
    },
    {
      dt: 1610884800,
      main: {
        temp: 298.37,
        feels_like: 296.28,
        temp_min: 298.37,
        temp_max: 298.37,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.02,
        deg: 342,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-01-17 12:00:00",
    },
  ],
  city: {
    id: 3461786,
    name: "Guarulhos",
    coord: {
      lat: -23.4628,
      lon: -46.5333,
    },
    country: "BR",
    population: 1169577,
    timezone: -10800,
    sunrise: 1610440248,
    sunset: 1610488670,
  },
};

export default openWeather;
