import '../styles/rollertap.css';

import { useState } from 'react';
import '../styles/rollertap.css';
import { useEffect } from 'react';
import { useI18n } from '../contexts/I18nProvider';
import funnyHamster from '../assets/rollertap/1.png';
import magicHamster from '../assets/rollertap/2.png';
import mightyHamster from '../assets/rollertap/3.png';
import handsomeHamster from '../assets/rollertap/4.png';
import pepeHamster from '../assets/rollertap/5.png';
import devilHamster from '../assets/rollertap/6.png';
import hamdelion from '../assets/rollertap/7.png';
import wizardHamster from '../assets/rollertap/8.png';
import roboHamster from '../assets/rollertap/9.png';
import popeHamster from '../assets/rollertap/10.png';
import banditHamster from '../assets/rollertap/11.png';
import poorHamdes from '../assets/rollertap/12.png';
import hamsterita from '../assets/rollertap/13.png';
import hamJinn from '../assets/rollertap/14.png';
import mrHamster from '../assets/rollertap/15.png';
import bigBossHamster from '../assets/rollertap/16.png';
import uncleBlessing from '../assets/rollertap/19.gif';
import ofiiceHamster from '../assets/rollertap/22.png';
import fifiHamster from '../assets/rollertap/23.png';

export default function Rollertap() {
  const { t } = useI18n()

  const [rows, setRows] = useState([
    {
      "id": 1,
      "name": "Funny Hamster",
      "image": funnyHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 5,
          "price": 500,
          "roiHours": 100
        },
        {
          "level": 2,
          "coinsPerHour": 6,
          "price": 600,
          "roiHours": 100
        },
        {
          "level": 3,
          "coinsPerHour": 7,
          "price": 720,
          "roiHours": 102.8571429
        },
        {
          "level": 4,
          "coinsPerHour": 7,
          "price": 864,
          "roiHours": 123.4285714
        },
        {
          "level": 5,
          "coinsPerHour": 8,
          "price": 1037,
          "roiHours": 129.625
        },
        {
          "level": 6,
          "coinsPerHour": 9,
          "price": 1244,
          "roiHours": 138.2222222
        },
        {
          "level": 7,
          "coinsPerHour": 10,
          "price": 1493,
          "roiHours": 149.3
        },
        {
          "level": 8,
          "coinsPerHour": 11,
          "price": 1792,
          "roiHours": 162.9090909
        },
        {
          "level": 9,
          "coinsPerHour": 12,
          "price": 2150,
          "roiHours": 179.1666667
        },
        {
          "level": 10,
          "coinsPerHour": 13,
          "price": 2580,
          "roiHours": 198.4615385
        },
        {
          "level": 11,
          "coinsPerHour": 14,
          "price": 3096,
          "roiHours": 221.1428571
        },
        {
          "level": 12,
          "coinsPerHour": 16,
          "price": 3715,
          "roiHours": 232.1875
        },
        {
          "level": 13,
          "coinsPerHour": 17,
          "price": 4458,
          "roiHours": 262.2352941
        },
        {
          "level": 14,
          "coinsPerHour": 19,
          "price": 5350,
          "roiHours": 281.5789474
        },
        {
          "level": 15,
          "coinsPerHour": 21,
          "price": 6420,
          "roiHours": 305.7142857
        },
        {
          "level": 16,
          "coinsPerHour": 23,
          "price": 7704,
          "roiHours": 334.9565217
        },
        {
          "level": 17,
          "coinsPerHour": 25,
          "price": 9244,
          "roiHours": 369.76
        },
        {
          "level": 18,
          "coinsPerHour": 28,
          "price": 11093,
          "roiHours": 396.1785714
        },
        {
          "level": 19,
          "coinsPerHour": 31,
          "price": 13312,
          "roiHours": 429.4193548
        },
        {
          "level": 20,
          "coinsPerHour": 34,
          "price": 15974,
          "roiHours": 469.8235294
        },
        {
          "level": 21,
          "coinsPerHour": 37,
          "price": 19169,
          "roiHours": 518.0810811
        },
        {
          "level": 22,
          "coinsPerHour": 41,
          "price": 23003,
          "roiHours": 561.0487805
        },
        {
          "level": 23,
          "coinsPerHour": 45,
          "price": 27603,
          "roiHours": 613.4
        },
        {
          "level": 24,
          "coinsPerHour": 49,
          "price": 33124,
          "roiHours": 676
        },
        {
          "level": 25,
          "coinsPerHour": 54,
          "price": 39748,
          "roiHours": 736.0740741
        },
        {
          "level": 26,
          "coinsPerHour": 60,
          "price": 47698,
          "roiHours": 794.9666667
        },
        {
          "level": 27,
          "coinsPerHour": 66,
          "price": 57238,
          "roiHours": 867.2424242
        },
        {
          "level": 28,
          "coinsPerHour": 72,
          "price": 68685,
          "roiHours": 953.9583333
        },
        {
          "level": 29,
          "coinsPerHour": 79,
          "price": 82422,
          "roiHours": 1043.316456
        },
        {
          "level": 30,
          "coinsPerHour": 87,
          "price": 98907,
          "roiHours": 1136.862069
        },
        {
          "level": 31,
          "coinsPerHour": 96,
          "price": 118688,
          "roiHours": 1236.333333
        },
        {
          "level": 32,
          "coinsPerHour": 106,
          "price": 142426,
          "roiHours": 1343.641509
        },
        {
          "level": 33,
          "coinsPerHour": 116,
          "price": 170911,
          "roiHours": 1473.37069
        },
        {
          "level": 34,
          "coinsPerHour": 128,
          "price": 205093,
          "roiHours": 1602.289063
        },
        {
          "level": 35,
          "coinsPerHour": 141,
          "price": 246112,
          "roiHours": 1745.475177
        },
        {
          "level": 36,
          "coinsPerHour": 155,
          "price": 295334,
          "roiHours": 1905.380645
        },
        {
          "level": 37,
          "coinsPerHour": 170,
          "price": 354401,
          "roiHours": 2084.711765
        },
        {
          "level": 38,
          "coinsPerHour": 187,
          "price": 425281,
          "roiHours": 2274.229947
        },
        {
          "level": 39,
          "coinsPerHour": 206,
          "price": 510000,
          "roiHours": 2475.728155
        },
        {
          "level": 40,
          "coinsPerHour": 226,
          "price": 612000,
          "roiHours": 2707.964602
        },
        {
          "level": 41,
          "coinsPerHour": 249,
          "price": 735000,
          "roiHours": 2951.807229
        },
        {
          "level": 42,
          "coinsPerHour": 274,
          "price": 882000,
          "roiHours": 3218.978102
        },
        {
          "level": 43,
          "coinsPerHour": 301,
          "price": 1058000,
          "roiHours": 3514.950166
        },
        {
          "level": 44,
          "coinsPerHour": 331,
          "price": 1270000,
          "roiHours": 3836.858006
        },
        {
          "level": 45,
          "coinsPerHour": 364,
          "price": 1524000,
          "roiHours": 4186.813187
        },
        {
          "level": 46,
          "coinsPerHour": 401,
          "price": 1829000,
          "roiHours": 4561.097257
        },
        {
          "level": 47,
          "coinsPerHour": 441,
          "price": 2194000,
          "roiHours": 4975.056689
        },
        {
          "level": 48,
          "coinsPerHour": 485,
          "price": 2633000,
          "roiHours": 5428.865979
        },
        {
          "level": 49,
          "coinsPerHour": 534,
          "price": 3160000,
          "roiHours": 5917.602996
        },
        {
          "level": 50,
          "coinsPerHour": 587,
          "price": 3792000,
          "roiHours": 6459.965928
        },
        {
          "level": 51,
          "coinsPerHour": 646,
          "price": 4550000,
          "roiHours": 7043.343653
        },
        {
          "level": 52,
          "coinsPerHour": 710,
          "price": 5460000,
          "roiHours": 7690.140845
        },
        {
          "level": 53,
          "coinsPerHour": 781,
          "price": 6552000,
          "roiHours": 8389.244558
        },
        {
          "level": 54,
          "coinsPerHour": 859,
          "price": 7863000,
          "roiHours": 9153.667055
        },
        {
          "level": 55,
          "coinsPerHour": 945,
          "price": 9435000,
          "roiHours": 9984.126984
        },
        {
          "level": 56,
          "coinsPerHour": 1040,
          "price": 11322000,
          "roiHours": 10886.53846
        },
        {
          "level": 57,
          "coinsPerHour": 1144,
          "price": 13587000,
          "roiHours": 11876.74825
        },
        {
          "level": 58,
          "coinsPerHour": 1258,
          "price": 16304000,
          "roiHours": 12960.25437
        },
        {
          "level": 59,
          "coinsPerHour": 1384,
          "price": 19565000,
          "roiHours": 14136.56069
        },
        {
          "level": 60,
          "coinsPerHour": 1522,
          "price": 23478000,
          "roiHours": 15425.75558
        },
        {
          "level": 61,
          "coinsPerHour": 1675,
          "price": 28174000,
          "roiHours": 16820.29851
        },
        {
          "level": 62,
          "coinsPerHour": 1842,
          "price": 33809000,
          "roiHours": 18354.50597
        },
        {
          "level": 63,
          "coinsPerHour": 2026,
          "price": 40570000,
          "roiHours": 20024.67917
        },
        {
          "level": 64,
          "coinsPerHour": 2229,
          "price": 48684000,
          "roiHours": 21841.18439
        },
        {
          "level": 65,
          "coinsPerHour": 2452,
          "price": 58421000,
          "roiHours": 23825.85644
        },
        {
          "level": 66,
          "coinsPerHour": 2697,
          "price": 70105000,
          "roiHours": 25993.6967
        },
        {
          "level": 67,
          "coinsPerHour": 2967,
          "price": 84126000,
          "roiHours": 28353.89282
        },
        {
          "level": 68,
          "coinsPerHour": 3263,
          "price": 100952000,
          "roiHours": 30938.40025
        },
        {
          "level": 69,
          "coinsPerHour": 3590,
          "price": 121142000,
          "roiHours": 33744.28969
        },
        {
          "level": 70,
          "coinsPerHour": 3949,
          "price": 145370000,
          "roiHours": 36811.8511
        },
        {
          "level": 71,
          "coinsPerHour": 4344,
          "price": 174444000,
          "roiHours": 40157.45856
        },
        {
          "level": 72,
          "coinsPerHour": 4778,
          "price": 209333000,
          "roiHours": 43811.84596
        },
        {
          "level": 73,
          "coinsPerHour": 5256,
          "price": 251200000,
          "roiHours": 47792.99848
        },
        {
          "level": 74,
          "coinsPerHour": 5781,
          "price": 301440000,
          "roiHours": 52143.22782
        },
        {
          "level": 75,
          "coinsPerHour": 6359,
          "price": 361728000,
          "roiHours": 56884.41579
        },
        {
          "level": 76,
          "coinsPerHour": 6995,
          "price": 434074000,
          "roiHours": 62054.89635
        },
        {
          "level": 77,
          "coinsPerHour": 7695,
          "price": 521000000,
          "roiHours": 67706.30279
        },
        {
          "level": 78,
          "coinsPerHour": 8464,
          "price": 625000000,
          "roiHours": 73842.15501
        },
        {
          "level": 79,
          "coinsPerHour": 9311,
          "price": 750000000,
          "roiHours": 80549.88723
        },
        {
          "level": 80,
          "coinsPerHour": 10242,
          "price": 900000000,
          "roiHours": 87873.46221
        },
        {
          "level": 81,
          "coinsPerHour": 11266,
          "price": 1080000000,
          "roiHours": 95863.66057
        },
        {
          "level": 82,
          "coinsPerHour": 12393,
          "price": 1296000000,
          "roiHours": 104575.1634
        },
        {
          "level": 83,
          "coinsPerHour": 13632,
          "price": 1555000000,
          "roiHours": 114069.8357
        },
        {
          "level": 84,
          "coinsPerHour": 14995,
          "price": 1866000000,
          "roiHours": 124441.4805
        },
        {
          "level": 85,
          "coinsPerHour": 16495,
          "price": 2240000000,
          "roiHours": 135798.7269
        },
        {
          "level": 86,
          "coinsPerHour": 18144,
          "price": 2688000000,
          "roiHours": 148148.1481
        },
        {
          "level": 87,
          "coinsPerHour": 19959,
          "price": 3225000000,
          "roiHours": 161581.2415
        },
        {
          "level": 88,
          "coinsPerHour": 21955,
          "price": 3870000000,
          "roiHours": 176269.6425
        },
        {
          "level": 89,
          "coinsPerHour": 24150,
          "price": 4644000000,
          "roiHours": 192298.1366
        },
        {
          "level": 90,
          "coinsPerHour": 26565,
          "price": 5573000000,
          "roiHours": 209787.3141
        },
        {
          "level": 91,
          "coinsPerHour": 29222,
          "price": 6688000000,
          "roiHours": 228868.6606
        },
        {
          "level": 92,
          "coinsPerHour": 32144,
          "price": 8025000000,
          "roiHours": 249657.7899
        },
        {
          "level": 93,
          "coinsPerHour": 35358,
          "price": 9630000000,
          "roiHours": 272357.0338
        },
        {
          "level": 94,
          "coinsPerHour": 38894,
          "price": 11556000000,
          "roiHours": 297115.2363
        },
        {
          "level": 95,
          "coinsPerHour": 42783,
          "price": 13868000000,
          "roiHours": 324147.4417
        },
        {
          "level": 96,
          "coinsPerHour": 47062,
          "price": 16641000000,
          "roiHours": 353597.3822
        }
      ]
    },
    {
      "id": 2,
      "name": "Magic Hamster",
      "image": magicHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 50,
          "price": 750,
          "roiHours": 15
        },
        {
          "level": 2,
          "coinsPerHour": 51,
          "price": 900,
          "roiHours": 17.64705882
        },
        {
          "level": 3,
          "coinsPerHour": 51,
          "price": 1080,
          "roiHours": 21.17647059
        },
        {
          "level": 4,
          "coinsPerHour": 51,
          "price": 1296,
          "roiHours": 25.41176471
        },
        {
          "level": 5,
          "coinsPerHour": 52,
          "price": 1555,
          "roiHours": 29.90384615
        },
        {
          "level": 6,
          "coinsPerHour": 52,
          "price": 1866,
          "roiHours": 35.88461538
        },
        {
          "level": 7,
          "coinsPerHour": 52,
          "price": 2239,
          "roiHours": 43.05769231
        },
        {
          "level": 8,
          "coinsPerHour": 52,
          "price": 2687,
          "roiHours": 51.67307692
        },
        {
          "level": 9,
          "coinsPerHour": 52,
          "price": 3225,
          "roiHours": 62.01923077
        },
        {
          "level": 10,
          "coinsPerHour": 53,
          "price": 3870,
          "roiHours": 73.01886792
        },
        {
          "level": 11,
          "coinsPerHour": 53,
          "price": 4644,
          "roiHours": 87.62264151
        },
        {
          "level": 12,
          "coinsPerHour": 53,
          "price": 5573,
          "roiHours": 105.1509434
        },
        {
          "level": 13,
          "coinsPerHour": 53,
          "price": 6687,
          "roiHours": 126.1698113
        },
        {
          "level": 14,
          "coinsPerHour": 54,
          "price": 8024,
          "roiHours": 148.5925926
        },
        {
          "level": 15,
          "coinsPerHour": 54,
          "price": 9629,
          "roiHours": 178.3148148
        },
        {
          "level": 16,
          "coinsPerHour": 55,
          "price": 11555,
          "roiHours": 210.0909091
        },
        {
          "level": 17,
          "coinsPerHour": 55,
          "price": 13866,
          "roiHours": 252.1090909
        },
        {
          "level": 18,
          "coinsPerHour": 56,
          "price": 16640,
          "roiHours": 297.1428571
        },
        {
          "level": 19,
          "coinsPerHour": 56,
          "price": 19967,
          "roiHours": 356.5535714
        },
        {
          "level": 20,
          "coinsPerHour": 57,
          "price": 23961,
          "roiHours": 420.3684211
        },
        {
          "level": 21,
          "coinsPerHour": 57,
          "price": 28753,
          "roiHours": 504.4385965
        },
        {
          "level": 22,
          "coinsPerHour": 58,
          "price": 34504,
          "roiHours": 594.8965517
        },
        {
          "level": 23,
          "coinsPerHour": 59,
          "price": 41405,
          "roiHours": 701.779661
        },
        {
          "level": 24,
          "coinsPerHour": 60,
          "price": 49686,
          "roiHours": 828.1
        },
        {
          "level": 25,
          "coinsPerHour": 61,
          "price": 59623,
          "roiHours": 977.4262295
        },
        {
          "level": 26,
          "coinsPerHour": 62,
          "price": 71547,
          "roiHours": 1153.983871
        },
        {
          "level": 27,
          "coinsPerHour": 63,
          "price": 85857,
          "roiHours": 1362.809524
        },
        {
          "level": 28,
          "coinsPerHour": 64,
          "price": 103028,
          "roiHours": 1609.8125
        },
        {
          "level": 29,
          "coinsPerHour": 66,
          "price": 123633,
          "roiHours": 1873.227273
        },
        {
          "level": 30,
          "coinsPerHour": 67,
          "price": 148360,
          "roiHours": 2214.328358
        },
        {
          "level": 31,
          "coinsPerHour": 69,
          "price": 178032,
          "roiHours": 2580.173913
        },
        {
          "level": 32,
          "coinsPerHour": 71,
          "price": 213639,
          "roiHours": 3009
        },
        {
          "level": 33,
          "coinsPerHour": 73,
          "price": 256366,
          "roiHours": 3511.863014
        },
        {
          "level": 34,
          "coinsPerHour": 76,
          "price": 307640,
          "roiHours": 4047.894737
        },
        {
          "level": 35,
          "coinsPerHour": 78,
          "price": 369168,
          "roiHours": 4732.923077
        },
        {
          "level": 36,
          "coinsPerHour": 81,
          "price": 443001,
          "roiHours": 5469.148148
        },
        {
          "level": 37,
          "coinsPerHour": 84,
          "price": 532000,
          "roiHours": 6333.333333
        },
        {
          "level": 38,
          "coinsPerHour": 87,
          "price": 638000,
          "roiHours": 7333.333333
        },
        {
          "level": 39,
          "coinsPerHour": 91,
          "price": 766000,
          "roiHours": 8417.582418
        },
        {
          "level": 40,
          "coinsPerHour": 95,
          "price": 919000,
          "roiHours": 9673.684211
        },
        {
          "level": 41,
          "coinsPerHour": 100,
          "price": 1102000,
          "roiHours": 11020
        },
        {
          "level": 42,
          "coinsPerHour": 105,
          "price": 1323000,
          "roiHours": 12600
        },
        {
          "level": 43,
          "coinsPerHour": 110,
          "price": 1587000,
          "roiHours": 14427.27273
        },
        {
          "level": 44,
          "coinsPerHour": 116,
          "price": 1905000,
          "roiHours": 16422.41379
        },
        {
          "level": 45,
          "coinsPerHour": 123,
          "price": 2286000,
          "roiHours": 18585.36585
        },
        {
          "level": 46,
          "coinsPerHour": 130,
          "price": 2743000,
          "roiHours": 21100
        },
        {
          "level": 47,
          "coinsPerHour": 138,
          "price": 3292000,
          "roiHours": 23855.07246
        },
        {
          "level": 48,
          "coinsPerHour": 147,
          "price": 3950000,
          "roiHours": 26870.7483
        },
        {
          "level": 49,
          "coinsPerHour": 157,
          "price": 4740000,
          "roiHours": 30191.0828
        },
        {
          "level": 50,
          "coinsPerHour": 167,
          "price": 5688000,
          "roiHours": 34059.88024
        },
        {
          "level": 51,
          "coinsPerHour": 179,
          "price": 6825000,
          "roiHours": 38128.49162
        },
        {
          "level": 52,
          "coinsPerHour": 192,
          "price": 8190000,
          "roiHours": 42656.25
        },
        {
          "level": 53,
          "coinsPerHour": 206,
          "price": 9828000,
          "roiHours": 47708.73786
        },
        {
          "level": 54,
          "coinsPerHour": 222,
          "price": 11794000,
          "roiHours": 53126.12613
        },
        {
          "level": 55,
          "coinsPerHour": 239,
          "price": 14153000,
          "roiHours": 59217.57322
        },
        {
          "level": 56,
          "coinsPerHour": 258,
          "price": 16984000,
          "roiHours": 65829.45736
        },
        {
          "level": 57,
          "coinsPerHour": 279,
          "price": 20380000,
          "roiHours": 73046.59498
        },
        {
          "level": 58,
          "coinsPerHour": 302,
          "price": 24456000,
          "roiHours": 80980.13245
        },
        {
          "level": 59,
          "coinsPerHour": 327,
          "price": 29348000,
          "roiHours": 89749.23547
        },
        {
          "level": 60,
          "coinsPerHour": 354,
          "price": 35217000,
          "roiHours": 99483.05085
        },
        {
          "level": 61,
          "coinsPerHour": 385,
          "price": 42261000,
          "roiHours": 109768.8312
        }
      ]
    },
    {
      "id": 3,
      "name": "Mighty Hamster",
      "image": mightyHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 55,
          "price": 1250,
          "roiHours": 22.72727273
        },
        {
          "level": 2,
          "coinsPerHour": 56,
          "price": 1500,
          "roiHours": 26.78571429
        },
        {
          "level": 3,
          "coinsPerHour": 56,
          "price": 1800,
          "roiHours": 32.14285714
        },
        {
          "level": 4,
          "coinsPerHour": 56,
          "price": 2160,
          "roiHours": 38.57142857
        },
        {
          "level": 5,
          "coinsPerHour": 57,
          "price": 2592,
          "roiHours": 45.47368421
        },
        {
          "level": 6,
          "coinsPerHour": 57,
          "price": 3110,
          "roiHours": 54.56140351
        },
        {
          "level": 7,
          "coinsPerHour": 57,
          "price": 3732,
          "roiHours": 65.47368421
        },
        {
          "level": 8,
          "coinsPerHour": 57,
          "price": 4478,
          "roiHours": 78.56140351
        },
        {
          "level": 9,
          "coinsPerHour": 57,
          "price": 5375,
          "roiHours": 94.29824561
        },
        {
          "level": 10,
          "coinsPerHour": 58,
          "price": 6450,
          "roiHours": 111.2068966
        },
        {
          "level": 11,
          "coinsPerHour": 58,
          "price": 7740,
          "roiHours": 133.4482759
        },
        {
          "level": 12,
          "coinsPerHour": 58,
          "price": 9288,
          "roiHours": 160.137931
        },
        {
          "level": 13,
          "coinsPerHour": 58,
          "price": 11145,
          "roiHours": 192.1551724
        },
        {
          "level": 14,
          "coinsPerHour": 59,
          "price": 13374,
          "roiHours": 226.6779661
        },
        {
          "level": 15,
          "coinsPerHour": 59,
          "price": 16049,
          "roiHours": 272.0169492
        },
        {
          "level": 16,
          "coinsPerHour": 60,
          "price": 19259,
          "roiHours": 320.9833333
        },
        {
          "level": 17,
          "coinsPerHour": 60,
          "price": 23111,
          "roiHours": 385.1833333
        },
        {
          "level": 18,
          "coinsPerHour": 61,
          "price": 27733,
          "roiHours": 454.6393443
        },
        {
          "level": 19,
          "coinsPerHour": 61,
          "price": 33279,
          "roiHours": 545.557377
        },
        {
          "level": 20,
          "coinsPerHour": 62,
          "price": 39935,
          "roiHours": 644.1129032
        },
        {
          "level": 21,
          "coinsPerHour": 62,
          "price": 47922,
          "roiHours": 772.9354839
        },
        {
          "level": 22,
          "coinsPerHour": 63,
          "price": 57506,
          "roiHours": 912.7936508
        },
        {
          "level": 23,
          "coinsPerHour": 64,
          "price": 69008,
          "roiHours": 1078.25
        },
        {
          "level": 24,
          "coinsPerHour": 65,
          "price": 82809,
          "roiHours": 1273.984615
        },
        {
          "level": 25,
          "coinsPerHour": 66,
          "price": 99371,
          "roiHours": 1505.621212
        },
        {
          "level": 26,
          "coinsPerHour": 67,
          "price": 119245,
          "roiHours": 1779.776119
        },
        {
          "level": 27,
          "coinsPerHour": 68,
          "price": 143094,
          "roiHours": 2104.323529
        },
        {
          "level": 28,
          "coinsPerHour": 69,
          "price": 171713,
          "roiHours": 2488.594203
        },
        {
          "level": 29,
          "coinsPerHour": 71,
          "price": 206056,
          "roiHours": 2902.197183
        },
        {
          "level": 30,
          "coinsPerHour": 72,
          "price": 247267,
          "roiHours": 3434.263889
        },
        {
          "level": 31,
          "coinsPerHour": 74,
          "price": 296720,
          "roiHours": 4009.72973
        },
        {
          "level": 32,
          "coinsPerHour": 76,
          "price": 356064,
          "roiHours": 4685.052632
        },
        {
          "level": 33,
          "coinsPerHour": 78,
          "price": 427277,
          "roiHours": 5477.910256
        },
        {
          "level": 34,
          "coinsPerHour": 81,
          "price": 513000,
          "roiHours": 6333.333333
        },
        {
          "level": 35,
          "coinsPerHour": 83,
          "price": 615000,
          "roiHours": 7409.638554
        },
        {
          "level": 36,
          "coinsPerHour": 86,
          "price": 738000,
          "roiHours": 8581.395349
        },
        {
          "level": 37,
          "coinsPerHour": 89,
          "price": 886000,
          "roiHours": 9955.05618
        },
        {
          "level": 38,
          "coinsPerHour": 92,
          "price": 1063000,
          "roiHours": 11554.34783
        },
        {
          "level": 39,
          "coinsPerHour": 96,
          "price": 1276000,
          "roiHours": 13291.66667
        },
        {
          "level": 40,
          "coinsPerHour": 100,
          "price": 1531000,
          "roiHours": 15310
        },
        {
          "level": 41,
          "coinsPerHour": 105,
          "price": 1837000,
          "roiHours": 17495.2381
        },
        {
          "level": 42,
          "coinsPerHour": 110,
          "price": 2205000,
          "roiHours": 20045.45455
        },
        {
          "level": 43,
          "coinsPerHour": 115,
          "price": 2646000,
          "roiHours": 23008.69565
        },
        {
          "level": 44,
          "coinsPerHour": 121,
          "price": 3175000,
          "roiHours": 26239.66942
        },
        {
          "level": 45,
          "coinsPerHour": 128,
          "price": 3810000,
          "roiHours": 29765.625
        },
        {
          "level": 46,
          "coinsPerHour": 135,
          "price": 4572000,
          "roiHours": 33866.66667
        },
        {
          "level": 47,
          "coinsPerHour": 143,
          "price": 5486000,
          "roiHours": 38363.63636
        },
        {
          "level": 48,
          "coinsPerHour": 152,
          "price": 6583000,
          "roiHours": 43309.21053
        },
        {
          "level": 49,
          "coinsPerHour": 162,
          "price": 7900000,
          "roiHours": 48765.4321
        },
        {
          "level": 50,
          "coinsPerHour": 172,
          "price": 9480000,
          "roiHours": 55116.27907
        },
        {
          "level": 51,
          "coinsPerHour": 184,
          "price": 11376000,
          "roiHours": 61826.08696
        },
        {
          "level": 52,
          "coinsPerHour": 197,
          "price": 13651000,
          "roiHours": 69294.41624
        },
        {
          "level": 53,
          "coinsPerHour": 211,
          "price": 16381000,
          "roiHours": 77635.07109
        }
      ]
    },
    {
      "id": 4,
      "name": "Handsome Hamster",
      "image": handsomeHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 105,
          "price": 2000,
          "roiHours": 19.04761905
        },
        {
          "level": 2,
          "coinsPerHour": 106,
          "price": 2400,
          "roiHours": 22.64150943
        },
        {
          "level": 3,
          "coinsPerHour": 106,
          "price": 2880,
          "roiHours": 27.16981132
        },
        {
          "level": 4,
          "coinsPerHour": 106,
          "price": 3456,
          "roiHours": 32.60377358
        },
        {
          "level": 5,
          "coinsPerHour": 107,
          "price": 4147,
          "roiHours": 38.75700935
        },
        {
          "level": 6,
          "coinsPerHour": 107,
          "price": 4977,
          "roiHours": 46.51401869
        },
        {
          "level": 7,
          "coinsPerHour": 107,
          "price": 5972,
          "roiHours": 55.81308411
        },
        {
          "level": 8,
          "coinsPerHour": 107,
          "price": 7166,
          "roiHours": 66.97196262
        },
        {
          "level": 9,
          "coinsPerHour": 107,
          "price": 8600,
          "roiHours": 80.37383178
        },
        {
          "level": 10,
          "coinsPerHour": 108,
          "price": 10820,
          "roiHours": 100.1851852
        },
        {
          "level": 11,
          "coinsPerHour": 108,
          "price": 12383,
          "roiHours": 114.6574074
        },
        {
          "level": 12,
          "coinsPerHour": 108,
          "price": 14860,
          "roiHours": 137.5925926
        },
        {
          "level": 13,
          "coinsPerHour": 108,
          "price": 17832,
          "roiHours": 165.1111111
        },
        {
          "level": 14,
          "coinsPerHour": 109,
          "price": 21399,
          "roiHours": 196.3211009
        },
        {
          "level": 15,
          "coinsPerHour": 109,
          "price": 25678,
          "roiHours": 235.5779817
        },
        {
          "level": 16,
          "coinsPerHour": 110,
          "price": 30814,
          "roiHours": 280.1272727
        },
        {
          "level": 17,
          "coinsPerHour": 110,
          "price": 36977,
          "roiHours": 336.1545455
        },
        {
          "level": 18,
          "coinsPerHour": 111,
          "price": 44372,
          "roiHours": 399.7477477
        },
        {
          "level": 19,
          "coinsPerHour": 111,
          "price": 53247,
          "roiHours": 479.7027027
        },
        {
          "level": 20,
          "coinsPerHour": 112,
          "price": 63896,
          "roiHours": 570.5
        },
        {
          "level": 21,
          "coinsPerHour": 112,
          "price": 76675,
          "roiHours": 684.5982143
        },
        {
          "level": 22,
          "coinsPerHour": 113,
          "price": 92010,
          "roiHours": 814.2477876
        },
        {
          "level": 23,
          "coinsPerHour": 114,
          "price": 110412,
          "roiHours": 968.5263158
        },
        {
          "level": 24,
          "coinsPerHour": 115,
          "price": 132495,
          "roiHours": 1152.130435
        },
        {
          "level": 25,
          "coinsPerHour": 116,
          "price": 158994,
          "roiHours": 1370.637931
        },
        {
          "level": 26,
          "coinsPerHour": 117,
          "price": 190792,
          "roiHours": 1630.700855
        },
        {
          "level": 27,
          "coinsPerHour": 118,
          "price": 228951,
          "roiHours": 1940.262712
        },
        {
          "level": 28,
          "coinsPerHour": 119,
          "price": 274741,
          "roiHours": 2308.747899
        },
        {
          "level": 29,
          "coinsPerHour": 121,
          "price": 329689,
          "roiHours": 2724.702479
        },
        {
          "level": 30,
          "coinsPerHour": 122,
          "price": 395627,
          "roiHours": 3242.844262
        },
        {
          "level": 31,
          "coinsPerHour": 124,
          "price": 474753,
          "roiHours": 3828.653226
        },
        {
          "level": 32,
          "coinsPerHour": 126,
          "price": 570000,
          "roiHours": 4523.809524
        },
        {
          "level": 33,
          "coinsPerHour": 128,
          "price": 684000,
          "roiHours": 5343.75
        },
        {
          "level": 34,
          "coinsPerHour": 131,
          "price": 820000,
          "roiHours": 6259.541985
        },
        {
          "level": 35,
          "coinsPerHour": 133,
          "price": 984000,
          "roiHours": 7398.496241
        },
        {
          "level": 36,
          "coinsPerHour": 136,
          "price": 1181000,
          "roiHours": 8683.823529
        },
        {
          "level": 37,
          "coinsPerHour": 139,
          "price": 1418000,
          "roiHours": 10201.43885
        },
        {
          "level": 38,
          "coinsPerHour": 142,
          "price": 1701000,
          "roiHours": 11978.87324
        },
        {
          "level": 39,
          "coinsPerHour": 146,
          "price": 2041000,
          "roiHours": 13979.45205
        },
        {
          "level": 40,
          "coinsPerHour": 150,
          "price": 2450000,
          "roiHours": 16333.33333
        },
        {
          "level": 41,
          "coinsPerHour": 155,
          "price": 2940000,
          "roiHours": 18967.74194
        },
        {
          "level": 42,
          "coinsPerHour": 160,
          "price": 3527000,
          "roiHours": 22043.75
        },
        {
          "level": 43,
          "coinsPerHour": 165,
          "price": 4233000,
          "roiHours": 25654.54545
        },
        {
          "level": 44,
          "coinsPerHour": 171,
          "price": 5080000,
          "roiHours": 29707.60234
        },
        {
          "level": 45,
          "coinsPerHour": 178,
          "price": 6095000,
          "roiHours": 34241.57303
        },
        {
          "level": 46,
          "coinsPerHour": 185,
          "price": 7315000,
          "roiHours": 39540.54054
        },
        {
          "level": 47,
          "coinsPerHour": 193,
          "price": 8777000,
          "roiHours": 45476.68394
        },
        {
          "level": 48,
          "coinsPerHour": 202,
          "price": 10533000,
          "roiHours": 52143.56436
        },
        {
          "level": 49,
          "coinsPerHour": 212,
          "price": 12639000,
          "roiHours": 59617.92453
        },
        {
          "level": 50,
          "coinsPerHour": 222,
          "price": 15167000,
          "roiHours": 68319.81982
        },
        {
          "level": 51,
          "coinsPerHour": 234,
          "price": 18201000,
          "roiHours": 77782.05128
        }
      ]
    },
    {
      "id": 5,
      "name": "Pepe Hamster",
      "image": pepeHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 160,
          "price": 3250,
          "roiHours": 20.3125
        },
        {
          "level": 2,
          "coinsPerHour": 161,
          "price": 3900,
          "roiHours": 24.22360248
        },
        {
          "level": 3,
          "coinsPerHour": 161,
          "price": 4680,
          "roiHours": 29.06832298
        },
        {
          "level": 4,
          "coinsPerHour": 161,
          "price": 5616,
          "roiHours": 34.88198758
        },
        {
          "level": 5,
          "coinsPerHour": 162,
          "price": 6739,
          "roiHours": 41.59876543
        },
        {
          "level": 6,
          "coinsPerHour": 162,
          "price": 8087,
          "roiHours": 49.91975309
        },
        {
          "level": 7,
          "coinsPerHour": 162,
          "price": 9704,
          "roiHours": 59.90123457
        },
        {
          "level": 8,
          "coinsPerHour": 162,
          "price": 11645,
          "roiHours": 71.88271605
        },
        {
          "level": 9,
          "coinsPerHour": 162,
          "price": 13974,
          "roiHours": 86.25925926
        },
        {
          "level": 10,
          "coinsPerHour": 163,
          "price": 16769,
          "roiHours": 102.8773006
        },
        {
          "level": 11,
          "coinsPerHour": 163,
          "price": 20123,
          "roiHours": 123.4539877
        },
        {
          "level": 12,
          "coinsPerHour": 163,
          "price": 24148,
          "roiHours": 148.1472393
        },
        {
          "level": 13,
          "coinsPerHour": 163,
          "price": 28977,
          "roiHours": 177.7730061
        },
        {
          "level": 14,
          "coinsPerHour": 164,
          "price": 34773,
          "roiHours": 212.0304878
        },
        {
          "level": 15,
          "coinsPerHour": 164,
          "price": 41727,
          "roiHours": 254.4329268
        },
        {
          "level": 16,
          "coinsPerHour": 165,
          "price": 50073,
          "roiHours": 303.4727273
        },
        {
          "level": 17,
          "coinsPerHour": 165,
          "price": 60087,
          "roiHours": 364.1636364
        },
        {
          "level": 18,
          "coinsPerHour": 166,
          "price": 72105,
          "roiHours": 434.3674699
        },
        {
          "level": 19,
          "coinsPerHour": 166,
          "price": 86526,
          "roiHours": 521.2409639
        },
        {
          "level": 20,
          "coinsPerHour": 167,
          "price": 103831,
          "roiHours": 621.742515
        },
        {
          "level": 21,
          "coinsPerHour": 167,
          "price": 124597,
          "roiHours": 746.0898204
        },
        {
          "level": 22,
          "coinsPerHour": 168,
          "price": 149517,
          "roiHours": 889.9821429
        },
        {
          "level": 23,
          "coinsPerHour": 169,
          "price": 179420,
          "roiHours": 1061.656805
        },
        {
          "level": 24,
          "coinsPerHour": 170,
          "price": 215304,
          "roiHours": 1266.494118
        },
        {
          "level": 25,
          "coinsPerHour": 171,
          "price": 258365,
          "roiHours": 1510.906433
        },
        {
          "level": 26,
          "coinsPerHour": 172,
          "price": 310038,
          "roiHours": 1802.546512
        },
        {
          "level": 27,
          "coinsPerHour": 173,
          "price": 372045,
          "roiHours": 2150.549133
        },
        {
          "level": 28,
          "coinsPerHour": 174,
          "price": 446454,
          "roiHours": 2565.827586
        },
        {
          "level": 29,
          "coinsPerHour": 176,
          "price": 536000,
          "roiHours": 3045.454545
        },
        {
          "level": 30,
          "coinsPerHour": 177,
          "price": 643000,
          "roiHours": 3632.768362
        },
        {
          "level": 31,
          "coinsPerHour": 179,
          "price": 771000,
          "roiHours": 4307.26257
        },
        {
          "level": 32,
          "coinsPerHour": 181,
          "price": 926000,
          "roiHours": 5116.022099
        },
        {
          "level": 33,
          "coinsPerHour": 183,
          "price": 1111000,
          "roiHours": 6071.038251
        },
        {
          "level": 34,
          "coinsPerHour": 186,
          "price": 1333000,
          "roiHours": 7166.666667
        },
        {
          "level": 35,
          "coinsPerHour": 188,
          "price": 1600000,
          "roiHours": 8510.638298
        },
        {
          "level": 36,
          "coinsPerHour": 191,
          "price": 1920000,
          "roiHours": 10052.35602
        },
        {
          "level": 37,
          "coinsPerHour": 194,
          "price": 2304000,
          "roiHours": 11876.28866
        },
        {
          "level": 38,
          "coinsPerHour": 197,
          "price": 2764000,
          "roiHours": 14030.45685
        },
        {
          "level": 39,
          "coinsPerHour": 201,
          "price": 3317000,
          "roiHours": 16502.48756
        },
        {
          "level": 40,
          "coinsPerHour": 205,
          "price": 3981000,
          "roiHours": 19419.5122
        },
        {
          "level": 41,
          "coinsPerHour": 210,
          "price": 4777000,
          "roiHours": 22747.61905
        },
        {
          "level": 42,
          "coinsPerHour": 215,
          "price": 5732000,
          "roiHours": 26660.46512
        },
        {
          "level": 43,
          "coinsPerHour": 220,
          "price": 6879000,
          "roiHours": 31268.18182
        },
        {
          "level": 44,
          "coinsPerHour": 226,
          "price": 8254000,
          "roiHours": 36522.12389
        },
        {
          "level": 45,
          "coinsPerHour": 233,
          "price": 9905000,
          "roiHours": 42510.72961
        },
        {
          "level": 46,
          "coinsPerHour": 240,
          "price": 11886000,
          "roiHours": 49525
        },
        {
          "level": 47,
          "coinsPerHour": 248,
          "price": 14263000,
          "roiHours": 57512.09677
        },
        {
          "level": 48,
          "coinsPerHour": 257,
          "price": 17116000,
          "roiHours": 66599.22179
        },
        {
          "level": 49,
          "coinsPerHour": 267,
          "price": 20539000,
          "roiHours": 76925.09363
        },
        {
          "level": 50,
          "coinsPerHour": 277,
          "price": 24647000,
          "roiHours": 88978.33935
        }
      ]
    },
    {
      "id": 6,
      "name": "Devil Hamster",
      "image": devilHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 265,
          "price": 5250,
          "roiHours": 19.81132075
        },
        {
          "level": 2,
          "coinsPerHour": 266,
          "price": 6300,
          "roiHours": 23.68421053
        },
        {
          "level": 3,
          "coinsPerHour": 266,
          "price": 7560,
          "roiHours": 28.42105263
        },
        {
          "level": 4,
          "coinsPerHour": 266,
          "price": 9072,
          "roiHours": 34.10526316
        },
        {
          "level": 5,
          "coinsPerHour": 266,
          "price": 10886,
          "roiHours": 40.92481203
        },
        {
          "level": 6,
          "coinsPerHour": 267,
          "price": 13064,
          "roiHours": 48.92883895
        },
        {
          "level": 7,
          "coinsPerHour": 267,
          "price": 15676,
          "roiHours": 58.71161049
        },
        {
          "level": 8,
          "coinsPerHour": 267,
          "price": 18812,
          "roiHours": 70.45692884
        },
        {
          "level": 9,
          "coinsPerHour": 267,
          "price": 22574,
          "roiHours": 84.54681648
        },
        {
          "level": 10,
          "coinsPerHour": 268,
          "price": 27089,
          "roiHours": 101.0783582
        },
        {
          "level": 11,
          "coinsPerHour": 268,
          "price": 32507,
          "roiHours": 121.2947761
        },
        {
          "level": 12,
          "coinsPerHour": 268,
          "price": 39008,
          "roiHours": 145.5522388
        },
        {
          "level": 13,
          "coinsPerHour": 268,
          "price": 46810,
          "roiHours": 174.6641791
        },
        {
          "level": 14,
          "coinsPerHour": 269,
          "price": 56171,
          "roiHours": 208.8141264
        },
        {
          "level": 15,
          "coinsPerHour": 269,
          "price": 67406,
          "roiHours": 250.5799257
        },
        {
          "level": 16,
          "coinsPerHour": 270,
          "price": 80887,
          "roiHours": 299.5814815
        },
        {
          "level": 17,
          "coinsPerHour": 270,
          "price": 97064,
          "roiHours": 359.4962963
        },
        {
          "level": 18,
          "coinsPerHour": 271,
          "price": 116477,
          "roiHours": 429.804428
        },
        {
          "level": 19,
          "coinsPerHour": 271,
          "price": 139772,
          "roiHours": 515.7638376
        },
        {
          "level": 20,
          "coinsPerHour": 272,
          "price": 167727,
          "roiHours": 616.6433824
        },
        {
          "level": 21,
          "coinsPerHour": 272,
          "price": 202372,
          "roiHours": 744.0147059
        },
        {
          "level": 22,
          "coinsPerHour": 273,
          "price": 241527,
          "roiHours": 884.7142857
        },
        {
          "level": 23,
          "coinsPerHour": 274,
          "price": 289832,
          "roiHours": 1057.781022
        },
        {
          "level": 24,
          "coinsPerHour": 275,
          "price": 347799,
          "roiHours": 1264.723636
        },
        {
          "level": 25,
          "coinsPerHour": 276,
          "price": 417358,
          "roiHours": 1512.166667
        },
        {
          "level": 26,
          "coinsPerHour": 277,
          "price": 501000,
          "roiHours": 1808.66426
        },
        {
          "level": 27,
          "coinsPerHour": 278,
          "price": 601000,
          "roiHours": 2161.870504
        },
        {
          "level": 28,
          "coinsPerHour": 279,
          "price": 721000,
          "roiHours": 2584.229391
        },
        {
          "level": 29,
          "coinsPerHour": 281,
          "price": 865000,
          "roiHours": 3078.291815
        },
        {
          "level": 30,
          "coinsPerHour": 282,
          "price": 1039000,
          "roiHours": 3684.397163
        },
        {
          "level": 31,
          "coinsPerHour": 284,
          "price": 1246000,
          "roiHours": 4387.323944
        },
        {
          "level": 32,
          "coinsPerHour": 286,
          "price": 1495000,
          "roiHours": 5227.272727
        },
        {
          "level": 33,
          "coinsPerHour": 288,
          "price": 1795000,
          "roiHours": 6232.638889
        },
        {
          "level": 34,
          "coinsPerHour": 291,
          "price": 2153000,
          "roiHours": 7398.62543
        },
        {
          "level": 35,
          "coinsPerHour": 293,
          "price": 2584000,
          "roiHours": 8819.112628
        },
        {
          "level": 36,
          "coinsPerHour": 296,
          "price": 3101000,
          "roiHours": 10476.35135
        },
        {
          "level": 37,
          "coinsPerHour": 299,
          "price": 3721000,
          "roiHours": 12444.81605
        },
        {
          "level": 38,
          "coinsPerHour": 302,
          "price": 4465000,
          "roiHours": 14784.76821
        },
        {
          "level": 39,
          "coinsPerHour": 306,
          "price": 5359000,
          "roiHours": 17513.0719
        },
        {
          "level": 40,
          "coinsPerHour": 310,
          "price": 6430000,
          "roiHours": 20741.93548
        },
        {
          "level": 41,
          "coinsPerHour": 315,
          "price": 7716000,
          "roiHours": 24495.2381
        },
        {
          "level": 42,
          "coinsPerHour": 320,
          "price": 9260000,
          "roiHours": 28937.5
        },
        {
          "level": 43,
          "coinsPerHour": 325,
          "price": 11111000,
          "roiHours": 34187.69231
        },
        {
          "level": 44,
          "coinsPerHour": 331,
          "price": 13334000,
          "roiHours": 40283.98792
        },
        {
          "level": 45,
          "coinsPerHour": 338,
          "price": 16001000,
          "roiHours": 47340.23669
        },
        {
          "level": 46,
          "coinsPerHour": 345,
          "price": 19201000,
          "roiHours": 55655.07246
        },
        {
          "level": 47,
          "coinsPerHour": 353,
          "price": 23041000,
          "roiHours": 65271.95467
        },
        {
          "level": 48,
          "coinsPerHour": 362,
          "price": 27649000,
          "roiHours": 76378.45304
        },
        {
          "level": 49,
          "coinsPerHour": 372,
          "price": 33179000,
          "roiHours": 89190.86022
        },
        {
          "level": 50,
          "coinsPerHour": 382,
          "price": 39814000,
          "roiHours": 104225.1309
        }
      ]
    },
    {
      "id": 7,
      "name": "Hamdelion",
      "image": hamdelion,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 425,
          "price": 8500,
          "roiHours": 20
        },
        {
          "level": 2,
          "coinsPerHour": 426,
          "price": 10200,
          "roiHours": 23.94366197
        },
        {
          "level": 3,
          "coinsPerHour": 426,
          "price": 12240,
          "roiHours": 28.73239437
        },
        {
          "level": 4,
          "coinsPerHour": 426,
          "price": 14688,
          "roiHours": 34.47887324
        },
        {
          "level": 5,
          "coinsPerHour": 426,
          "price": 17626,
          "roiHours": 41.37558685
        },
        {
          "level": 6,
          "coinsPerHour": 427,
          "price": 21151,
          "roiHours": 49.53395785
        },
        {
          "level": 7,
          "coinsPerHour": 427,
          "price": 25381,
          "roiHours": 59.44028103
        },
        {
          "level": 8,
          "coinsPerHour": 427,
          "price": 30457,
          "roiHours": 71.32786885
        },
        {
          "level": 9,
          "coinsPerHour": 427,
          "price": 36548,
          "roiHours": 85.59250585
        },
        {
          "level": 10,
          "coinsPerHour": 427,
          "price": 43858,
          "roiHours": 102.7119438
        },
        {
          "level": 11,
          "coinsPerHour": 428,
          "price": 52630,
          "roiHours": 122.9672897
        },
        {
          "level": 12,
          "coinsPerHour": 428,
          "price": 63156,
          "roiHours": 147.5607477
        },
        {
          "level": 13,
          "coinsPerHour": 428,
          "price": 75787,
          "roiHours": 177.0724299
        },
        {
          "level": 14,
          "coinsPerHour": 428,
          "price": 90944,
          "roiHours": 212.4859813
        },
        {
          "level": 15,
          "coinsPerHour": 429,
          "price": 109133,
          "roiHours": 254.3892774
        },
        {
          "level": 16,
          "coinsPerHour": 429,
          "price": 130960,
          "roiHours": 305.2680653
        },
        {
          "level": 17,
          "coinsPerHour": 430,
          "price": 157152,
          "roiHours": 365.4697674
        },
        {
          "level": 18,
          "coinsPerHour": 430,
          "price": 188582,
          "roiHours": 438.5627907
        },
        {
          "level": 19,
          "coinsPerHour": 431,
          "price": 226398,
          "roiHours": 525.2853828
        },
        {
          "level": 20,
          "coinsPerHour": 431,
          "price": 271558,
          "roiHours": 630.0649652
        },
        {
          "level": 21,
          "coinsPerHour": 432,
          "price": 325870,
          "roiHours": 754.3287037
        },
        {
          "level": 22,
          "coinsPerHour": 432,
          "price": 391044,
          "roiHours": 905.1944444
        },
        {
          "level": 23,
          "coinsPerHour": 433,
          "price": 469252,
          "roiHours": 1083.722864
        },
        {
          "level": 24,
          "coinsPerHour": 434,
          "price": 563000,
          "roiHours": 1297.235023
        },
        {
          "level": 25,
          "coinsPerHour": 435,
          "price": 676000,
          "roiHours": 1554.022989
        },
        {
          "level": 26,
          "coinsPerHour": 436,
          "price": 811000,
          "roiHours": 1860.091743
        },
        {
          "level": 27,
          "coinsPerHour": 437,
          "price": 973000,
          "roiHours": 2226.544622
        },
        {
          "level": 28,
          "coinsPerHour": 438,
          "price": 1168000,
          "roiHours": 2666.666667
        },
        {
          "level": 29,
          "coinsPerHour": 439,
          "price": 1401000,
          "roiHours": 3191.343964
        },
        {
          "level": 30,
          "coinsPerHour": 441,
          "price": 1681000,
          "roiHours": 3811.791383
        },
        {
          "level": 31,
          "coinsPerHour": 442,
          "price": 2018000,
          "roiHours": 4565.61086
        },
        {
          "level": 32,
          "coinsPerHour": 444,
          "price": 2421000,
          "roiHours": 5452.702703
        },
        {
          "level": 33,
          "coinsPerHour": 446,
          "price": 2905000,
          "roiHours": 6513.452915
        },
        {
          "level": 34,
          "coinsPerHour": 448,
          "price": 3487000,
          "roiHours": 7783.482143
        },
        {
          "level": 35,
          "coinsPerHour": 451,
          "price": 4184000,
          "roiHours": 9277.161863
        },
        {
          "level": 36,
          "coinsPerHour": 453,
          "price": 5021000,
          "roiHours": 11083.88521
        },
        {
          "level": 37,
          "coinsPerHour": 456,
          "price": 6025000,
          "roiHours": 13212.7193
        },
        {
          "level": 38,
          "coinsPerHour": 459,
          "price": 7230000,
          "roiHours": 15751.63399
        },
        {
          "level": 39,
          "coinsPerHour": 462,
          "price": 8676000,
          "roiHours": 18779.22078
        },
        {
          "level": 40,
          "coinsPerHour": 466,
          "price": 10411000,
          "roiHours": 22341.20172
        },
        {
          "level": 41,
          "coinsPerHour": 470,
          "price": 12493000,
          "roiHours": 26580.85106
        },
        {
          "level": 42,
          "coinsPerHour": 475,
          "price": 14992000,
          "roiHours": 31562.10526
        },
        {
          "level": 43,
          "coinsPerHour": 480,
          "price": 17990000,
          "roiHours": 37479.16667
        },
        {
          "level": 44,
          "coinsPerHour": 485,
          "price": 21588000,
          "roiHours": 44511.34021
        },
        {
          "level": 45,
          "coinsPerHour": 491,
          "price": 25906000,
          "roiHours": 52761.71079
        },
        {
          "level": 46,
          "coinsPerHour": 498,
          "price": 31087000,
          "roiHours": 62423.69478
        },
        {
          "level": 47,
          "coinsPerHour": 505,
          "price": 37304000,
          "roiHours": 73869.30693
        },
        {
          "level": 48,
          "coinsPerHour": 513,
          "price": 44765000,
          "roiHours": 87261.20858
        },
        {
          "level": 49,
          "coinsPerHour": 522,
          "price": 53718000,
          "roiHours": 102908.046
        },
        {
          "level": 50,
          "coinsPerHour": 532,
          "price": 64461000,
          "roiHours": 121167.2932
        }
      ]
    },
    {
      "id": 8,
      "name": "Wizard Hamster",
      "image": wizardHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 690,
          "price": 13750,
          "roiHours": 19.92753623
        },
        {
          "level": 2,
          "coinsPerHour": 691,
          "price": 16500,
          "roiHours": 23.87843705
        },
        {
          "level": 3,
          "coinsPerHour": 691,
          "price": 19800,
          "roiHours": 28.65412446
        },
        {
          "level": 4,
          "coinsPerHour": 691,
          "price": 23760,
          "roiHours": 34.38494935
        },
        {
          "level": 5,
          "coinsPerHour": 691,
          "price": 28512,
          "roiHours": 41.26193922
        },
        {
          "level": 6,
          "coinsPerHour": 692,
          "price": 34214,
          "roiHours": 49.44219653
        },
        {
          "level": 7,
          "coinsPerHour": 692,
          "price": 41057,
          "roiHours": 59.33092486
        },
        {
          "level": 8,
          "coinsPerHour": 692,
          "price": 49269,
          "roiHours": 71.19797688
        },
        {
          "level": 9,
          "coinsPerHour": 692,
          "price": 59122,
          "roiHours": 85.43641618
        },
        {
          "level": 10,
          "coinsPerHour": 692,
          "price": 70947,
          "roiHours": 102.5245665
        },
        {
          "level": 11,
          "coinsPerHour": 693,
          "price": 85136,
          "roiHours": 122.8513709
        },
        {
          "level": 12,
          "coinsPerHour": 693,
          "price": 102164,
          "roiHours": 147.4227994
        },
        {
          "level": 13,
          "coinsPerHour": 693,
          "price": 122596,
          "roiHours": 176.9062049
        },
        {
          "level": 14,
          "coinsPerHour": 693,
          "price": 147116,
          "roiHours": 212.2886003
        },
        {
          "level": 15,
          "coinsPerHour": 694,
          "price": 176539,
          "roiHours": 254.3789625
        },
        {
          "level": 16,
          "coinsPerHour": 694,
          "price": 211847,
          "roiHours": 305.2550432
        },
        {
          "level": 17,
          "coinsPerHour": 695,
          "price": 254216,
          "roiHours": 365.7784173
        },
        {
          "level": 18,
          "coinsPerHour": 695,
          "price": 305059,
          "roiHours": 438.9338129
        },
        {
          "level": 19,
          "coinsPerHour": 696,
          "price": 366071,
          "roiHours": 525.9640805
        },
        {
          "level": 20,
          "coinsPerHour": 696,
          "price": 439285,
          "roiHours": 631.1566092
        },
        {
          "level": 21,
          "coinsPerHour": 697,
          "price": 527000,
          "roiHours": 756.097561
        },
        {
          "level": 22,
          "coinsPerHour": 697,
          "price": 633000,
          "roiHours": 908.1779053
        },
        {
          "level": 23,
          "coinsPerHour": 698,
          "price": 759000,
          "roiHours": 1087.39255
        },
        {
          "level": 24,
          "coinsPerHour": 699,
          "price": 911000,
          "roiHours": 1303.290415
        },
        {
          "level": 25,
          "coinsPerHour": 700,
          "price": 1093000,
          "roiHours": 1561.428571
        },
        {
          "level": 26,
          "coinsPerHour": 701,
          "price": 1312000,
          "roiHours": 1871.611983
        },
        {
          "level": 27,
          "coinsPerHour": 702,
          "price": 1574000,
          "roiHours": 2242.165242
        },
        {
          "level": 28,
          "coinsPerHour": 703,
          "price": 1889000,
          "roiHours": 2687.055477
        },
        {
          "level": 29,
          "coinsPerHour": 704,
          "price": 2267000,
          "roiHours": 3220.170455
        },
        {
          "level": 30,
          "coinsPerHour": 706,
          "price": 2720000,
          "roiHours": 3852.691218
        },
        {
          "level": 31,
          "coinsPerHour": 707,
          "price": 3264000,
          "roiHours": 4616.69024
        },
        {
          "level": 32,
          "coinsPerHour": 709,
          "price": 3917000,
          "roiHours": 5524.682652
        },
        {
          "level": 33,
          "coinsPerHour": 711,
          "price": 4700000,
          "roiHours": 6610.407876
        },
        {
          "level": 34,
          "coinsPerHour": 713,
          "price": 5640000,
          "roiHours": 7910.238429
        },
        {
          "level": 35,
          "coinsPerHour": 716,
          "price": 6768000,
          "roiHours": 9452.513966
        },
        {
          "level": 36,
          "coinsPerHour": 718,
          "price": 8122000,
          "roiHours": 11311.97772
        },
        {
          "level": 37,
          "coinsPerHour": 721,
          "price": 9746000,
          "roiHours": 13517.33703
        },
        {
          "level": 38,
          "coinsPerHour": 724,
          "price": 11695000,
          "roiHours": 16153.31492
        },
        {
          "level": 39,
          "coinsPerHour": 727,
          "price": 14034000,
          "roiHours": 19303.989
        },
        {
          "level": 40,
          "coinsPerHour": 731,
          "price": 16841000,
          "roiHours": 23038.30369
        },
        {
          "level": 41,
          "coinsPerHour": 735,
          "price": 20209000,
          "roiHours": 27495.2381
        },
        {
          "level": 42,
          "coinsPerHour": 740,
          "price": 24251000,
          "roiHours": 32771.62162
        },
        {
          "level": 43,
          "coinsPerHour": 745,
          "price": 29101000,
          "roiHours": 39061.74497
        },
        {
          "level": 44,
          "coinsPerHour": 750,
          "price": 34922000,
          "roiHours": 46562.66667
        },
        {
          "level": 45,
          "coinsPerHour": 756,
          "price": 41906000,
          "roiHours": 55431.21693
        },
        {
          "level": 46,
          "coinsPerHour": 763,
          "price": 50287000,
          "roiHours": 65906.94626
        },
        {
          "level": 47,
          "coinsPerHour": 770,
          "price": 60345000,
          "roiHours": 78370.12987
        },
        {
          "level": 48,
          "coinsPerHour": 778,
          "price": 70414000,
          "roiHours": 90506.42674
        },
        {
          "level": 49,
          "coinsPerHour": 787,
          "price": 86897000,
          "roiHours": 110415.5019
        },
        {
          "level": 50,
          "coinsPerHour": 797,
          "price": 104276000,
          "roiHours": 130835.6336
        }
      ]
    },
    {
      "id": 9,
      "name": "Robo-Hamster",
      "image": roboHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 1115,
          "price": 22500,
          "roiHours": 20.1793722
        },
        {
          "level": 2,
          "coinsPerHour": 1116,
          "price": 26700,
          "roiHours": 23.92473118
        },
        {
          "level": 3,
          "coinsPerHour": 1116,
          "price": 32040,
          "roiHours": 28.70967742
        },
        {
          "level": 4,
          "coinsPerHour": 1116,
          "price": 38560,
          "roiHours": 34.55197133
        },
        {
          "level": 5,
          "coinsPerHour": 1116,
          "price": 46138,
          "roiHours": 41.34229391
        },
        {
          "level": 6,
          "coinsPerHour": 1117,
          "price": 55365,
          "roiHours": 49.56580125
        },
        {
          "level": 7,
          "coinsPerHour": 1117,
          "price": 66438,
          "roiHours": 59.4789615
        },
        {
          "level": 8,
          "coinsPerHour": 1117,
          "price": 79726,
          "roiHours": 71.37511191
        },
        {
          "level": 9,
          "coinsPerHour": 1117,
          "price": 95671,
          "roiHours": 85.64995524
        },
        {
          "level": 10,
          "coinsPerHour": 1117,
          "price": 114805,
          "roiHours": 102.7797672
        },
        {
          "level": 11,
          "coinsPerHour": 1118,
          "price": 137766,
          "roiHours": 123.2254025
        },
        {
          "level": 12,
          "coinsPerHour": 1118,
          "price": 165319,
          "roiHours": 147.8703041
        },
        {
          "level": 13,
          "coinsPerHour": 1118,
          "price": 198383,
          "roiHours": 177.4445438
        },
        {
          "level": 14,
          "coinsPerHour": 1118,
          "price": 238060,
          "roiHours": 212.9338104
        },
        {
          "level": 15,
          "coinsPerHour": 1119,
          "price": 285672,
          "roiHours": 255.2922252
        },
        {
          "level": 16,
          "coinsPerHour": 1119,
          "price": 342806,
          "roiHours": 306.3503128
        },
        {
          "level": 17,
          "coinsPerHour": 1120,
          "price": 411367,
          "roiHours": 367.2919643
        },
        {
          "level": 18,
          "coinsPerHour": 1120,
          "price": 493641,
          "roiHours": 440.7508929
        },
        {
          "level": 19,
          "coinsPerHour": 1121,
          "price": 592000,
          "roiHours": 528.0999108
        },
        {
          "level": 20,
          "coinsPerHour": 1121,
          "price": 711000,
          "roiHours": 634.2551293
        },
        {
          "level": 21,
          "coinsPerHour": 1122,
          "price": 853000,
          "roiHours": 760.2495544
        },
        {
          "level": 22,
          "coinsPerHour": 1122,
          "price": 1024000,
          "roiHours": 912.6559715
        },
        {
          "level": 23,
          "coinsPerHour": 1123,
          "price": 1228000,
          "roiHours": 1093.499555
        },
        {
          "level": 24,
          "coinsPerHour": 1124,
          "price": 1474000,
          "roiHours": 1311.3879
        },
        {
          "level": 25,
          "coinsPerHour": 1125,
          "price": 1769000,
          "roiHours": 1572.444444
        },
        {
          "level": 26,
          "coinsPerHour": 1126,
          "price": 2123000,
          "roiHours": 1885.435169
        },
        {
          "level": 27,
          "coinsPerHour": 1127,
          "price": 2547000,
          "roiHours": 2259.982254
        },
        {
          "level": 28,
          "coinsPerHour": 1128,
          "price": 3056000,
          "roiHours": 2709.219858
        },
        {
          "level": 29,
          "coinsPerHour": 1129,
          "price": 3668000,
          "roiHours": 3248.892826
        },
        {
          "level": 30,
          "coinsPerHour": 1131,
          "price": 4401000,
          "roiHours": 3891.246684
        },
        {
          "level": 31,
          "coinsPerHour": 1132,
          "price": 5282000,
          "roiHours": 4666.077739
        },
        {
          "level": 32,
          "coinsPerHour": 1134,
          "price": 6338000,
          "roiHours": 5589.065256
        },
        {
          "level": 33,
          "coinsPerHour": 1136,
          "price": 7606000,
          "roiHours": 6695.422535
        },
        {
          "level": 34,
          "coinsPerHour": 1138,
          "price": 9127000,
          "roiHours": 8020.210896
        },
        {
          "level": 35,
          "coinsPerHour": 1141,
          "price": 10952000,
          "roiHours": 9598.597721
        },
        {
          "level": 36,
          "coinsPerHour": 1143,
          "price": 13142000,
          "roiHours": 11497.81277
        },
        {
          "level": 37,
          "coinsPerHour": 1146,
          "price": 14771000,
          "roiHours": 12889.17976
        },
        {
          "level": 38,
          "coinsPerHour": 1149,
          "price": 18925000,
          "roiHours": 16470.84421
        },
        {
          "level": 39,
          "coinsPerHour": 1152,
          "price": 22710000,
          "roiHours": 19713.54167
        },
        {
          "level": 40,
          "coinsPerHour": 1156,
          "price": 27252000,
          "roiHours": 23574.39446
        },
        {
          "level": 41,
          "coinsPerHour": 1160,
          "price": 32702000,
          "roiHours": 28191.37931
        },
        {
          "level": 42,
          "coinsPerHour": 1165,
          "price": 39243000,
          "roiHours": 33684.97854
        },
        {
          "level": 43,
          "coinsPerHour": 1170,
          "price": 47091000,
          "roiHours": 40248.71795
        },
        {
          "level": 44,
          "coinsPerHour": 1175,
          "price": 56510000,
          "roiHours": 48093.61702
        },
        {
          "level": 45,
          "coinsPerHour": 1181,
          "price": 67812000,
          "roiHours": 57419.13633
        },
        {
          "level": 46,
          "coinsPerHour": 1188,
          "price": 81374000,
          "roiHours": 68496.633
        },
        {
          "level": 47,
          "coinsPerHour": 1195,
          "price": 97649000,
          "roiHours": 81714.64435
        },
        {
          "level": 48,
          "coinsPerHour": 1203,
          "price": 117179000,
          "roiHours": 97405.65254
        },
        {
          "level": 49,
          "coinsPerHour": 1212,
          "price": 140614000,
          "roiHours": 116018.1518
        },
        {
          "level": 50,
          "coinsPerHour": 1222,
          "price": 168737000,
          "roiHours": 138082.6514
        }
      ]
    },
    {
      "id": 10,
      "name": "Pope Hamster",
      "image": popeHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 1805,
          "price": 36000,
          "roiHours": 19.94459834
        },
        {
          "level": 2,
          "coinsPerHour": 1806,
          "price": 43200,
          "roiHours": 23.92026578
        },
        {
          "level": 3,
          "coinsPerHour": 1806,
          "price": 51840,
          "roiHours": 28.70431894
        },
        {
          "level": 4,
          "coinsPerHour": 1806,
          "price": 62208,
          "roiHours": 34.44518272
        },
        {
          "level": 5,
          "coinsPerHour": 1806,
          "price": 74650,
          "roiHours": 41.33444075
        },
        {
          "level": 6,
          "coinsPerHour": 1807,
          "price": 89580,
          "roiHours": 49.57387936
        },
        {
          "level": 7,
          "coinsPerHour": 1807,
          "price": 107495,
          "roiHours": 59.48810183
        },
        {
          "level": 8,
          "coinsPerHour": 1807,
          "price": 128995,
          "roiHours": 71.38627559
        },
        {
          "level": 9,
          "coinsPerHour": 1807,
          "price": 154793,
          "roiHours": 85.66297731
        },
        {
          "level": 10,
          "coinsPerHour": 1807,
          "price": 185752,
          "roiHours": 102.7957941
        },
        {
          "level": 11,
          "coinsPerHour": 1808,
          "price": 222903,
          "roiHours": 123.2870575
        },
        {
          "level": 12,
          "coinsPerHour": 1808,
          "price": 267483,
          "roiHours": 147.9441372
        },
        {
          "level": 13,
          "coinsPerHour": 1808,
          "price": 320980,
          "roiHours": 177.5331858
        },
        {
          "level": 14,
          "coinsPerHour": 1808,
          "price": 385176,
          "roiHours": 213.039823
        },
        {
          "level": 15,
          "coinsPerHour": 1809,
          "price": 462211,
          "roiHours": 255.5063571
        },
        {
          "level": 16,
          "coinsPerHour": 1809,
          "price": 555000,
          "roiHours": 306.7993367
        },
        {
          "level": 17,
          "coinsPerHour": 1810,
          "price": 666000,
          "roiHours": 367.9558011
        },
        {
          "level": 18,
          "coinsPerHour": 1810,
          "price": 799000,
          "roiHours": 441.4364641
        },
        {
          "level": 19,
          "coinsPerHour": 1811,
          "price": 958000,
          "roiHours": 528.9895086
        },
        {
          "level": 20,
          "coinsPerHour": 1811,
          "price": 1150000,
          "roiHours": 635.0082827
        },
        {
          "level": 21,
          "coinsPerHour": 1812,
          "price": 1380000,
          "roiHours": 761.589404
        },
        {
          "level": 22,
          "coinsPerHour": 1812,
          "price": 1656000,
          "roiHours": 913.9072848
        },
        {
          "level": 23,
          "coinsPerHour": 1813,
          "price": 1987000,
          "roiHours": 1095.973525
        },
        {
          "level": 24,
          "coinsPerHour": 1814,
          "price": 2385000,
          "roiHours": 1314.77398
        },
        {
          "level": 25,
          "coinsPerHour": 1815,
          "price": 2862000,
          "roiHours": 1576.859504
        },
        {
          "level": 26,
          "coinsPerHour": 1816,
          "price": 3434000,
          "roiHours": 1890.969163
        },
        {
          "level": 27,
          "coinsPerHour": 1817,
          "price": 4121000,
          "roiHours": 2268.024216
        },
        {
          "level": 28,
          "coinsPerHour": 1818,
          "price": 4945000,
          "roiHours": 2720.022002
        },
        {
          "level": 29,
          "coinsPerHour": 1819,
          "price": 5934000,
          "roiHours": 3262.231996
        },
        {
          "level": 30,
          "coinsPerHour": 1821,
          "price": 7121000,
          "roiHours": 3910.488742
        },
        {
          "level": 31,
          "coinsPerHour": 1822,
          "price": 8546000,
          "roiHours": 4690.450055
        },
        {
          "level": 32,
          "coinsPerHour": 1824,
          "price": 10255000,
          "roiHours": 5622.258772
        },
        {
          "level": 33,
          "coinsPerHour": 1826,
          "price": 12306000,
          "roiHours": 6739.32092
        },
        {
          "level": 34,
          "coinsPerHour": 1828,
          "price": 14767000,
          "roiHours": 8078.227571
        },
        {
          "level": 35,
          "coinsPerHour": 1831,
          "price": 17720000,
          "roiHours": 9677.771709
        },
        {
          "level": 36,
          "coinsPerHour": 1833,
          "price": 21264000,
          "roiHours": 11600.65466
        },
        {
          "level": 37,
          "coinsPerHour": 1836,
          "price": 25517000,
          "roiHours": 13898.14815
        },
        {
          "level": 38,
          "coinsPerHour": 1839,
          "price": 30620000,
          "roiHours": 16650.35345
        },
        {
          "level": 39,
          "coinsPerHour": 1842,
          "price": 36744000,
          "roiHours": 19947.88274
        },
        {
          "level": 40,
          "coinsPerHour": 1846,
          "price": 44093000,
          "roiHours": 23885.69881
        },
        {
          "level": 41,
          "coinsPerHour": 1850,
          "price": 52912000,
          "roiHours": 28601.08108
        },
        {
          "level": 42,
          "coinsPerHour": 1855,
          "price": 63494000,
          "roiHours": 34228.57143
        },
        {
          "level": 43,
          "coinsPerHour": 1860,
          "price": 76193000,
          "roiHours": 40963.97849
        },
        {
          "level": 44,
          "coinsPerHour": 1865,
          "price": 91432000,
          "roiHours": 49025.20107
        },
        {
          "level": 45,
          "coinsPerHour": 1871,
          "price": 109718000,
          "roiHours": 58641.36825
        },
        {
          "level": 46,
          "coinsPerHour": 1878,
          "price": 131661000,
          "roiHours": 70107.02875
        },
        {
          "level": 47,
          "coinsPerHour": 1885,
          "price": 157994000,
          "roiHours": 83816.44562
        },
        {
          "level": 48,
          "coinsPerHour": 1893,
          "price": 189592000,
          "roiHours": 100154.2525
        },
        {
          "level": 49,
          "coinsPerHour": 1902,
          "price": 227511000,
          "roiHours": 119616.7192
        },
        {
          "level": 50,
          "coinsPerHour": 1912,
          "price": 273013000,
          "roiHours": 142789.2259
        }
      ]
    },
    {
      "id": 11,
      "name": "Bandit Hamster",
      "image": banditHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 2920,
          "price": 58250,
          "roiHours": 19.94863014
        },
        {
          "level": 2,
          "coinsPerHour": 2921,
          "price": 69609,
          "roiHours": 23.83053749
        },
        {
          "level": 3,
          "coinsPerHour": 2922,
          "price": 83182,
          "roiHours": 28.46748802
        },
        {
          "level": 4,
          "coinsPerHour": 2922,
          "price": 99403,
          "roiHours": 34.01882272
        },
        {
          "level": 5,
          "coinsPerHour": 2923,
          "price": 118787,
          "roiHours": 40.63872733
        },
        {
          "level": 6,
          "coinsPerHour": 2924,
          "price": 141950,
          "roiHours": 48.54651163
        },
        {
          "level": 7,
          "coinsPerHour": 2926,
          "price": 169630,
          "roiHours": 57.97334245
        },
        {
          "level": 8,
          "coinsPerHour": 2928,
          "price": 202708,
          "roiHours": 69.23087432
        },
        {
          "level": 9,
          "coinsPerHour": 2931,
          "price": 242236,
          "roiHours": 82.64619584
        },
        {
          "level": 10,
          "coinsPerHour": 2935,
          "price": 289472,
          "roiHours": 98.62759796
        },
        {
          "level": 11,
          "coinsPerHour": 2940,
          "price": 345919,
          "roiHours": 117.6595238
        },
        {
          "level": 12,
          "coinsPerHour": 2947,
          "price": 413374,
          "roiHours": 140.2694265
        },
        {
          "level": 13,
          "coinsPerHour": 2957,
          "price": 493982,
          "roiHours": 167.0551234
        },
        {
          "level": 14,
          "coinsPerHour": 2969,
          "price": 590000,
          "roiHours": 198.7201078
        },
        {
          "level": 15,
          "coinsPerHour": 2987,
          "price": 705000,
          "roiHours": 236.0227653
        },
        {
          "level": 16,
          "coinsPerHour": 3010,
          "price": 843000,
          "roiHours": 280.0664452
        },
        {
          "level": 17,
          "coinsPerHour": 3042,
          "price": 1007000,
          "roiHours": 331.0322156
        },
        {
          "level": 18,
          "coinsPerHour": 3084,
          "price": 1204000,
          "roiHours": 390.4020752
        },
        {
          "level": 19,
          "coinsPerHour": 3142,
          "price": 1439000,
          "roiHours": 457.9885423
        },
        {
          "level": 20,
          "coinsPerHour": 3219,
          "price": 1719000,
          "roiHours": 534.0167754
        },
        {
          "level": 21,
          "coinsPerHour": 3324,
          "price": 2054000,
          "roiHours": 617.9302046
        },
        {
          "level": 22,
          "coinsPerHour": 3466,
          "price": 2455000,
          "roiHours": 708.3092902
        },
        {
          "level": 23,
          "coinsPerHour": 3657,
          "price": 2934000,
          "roiHours": 802.2969647
        },
        {
          "level": 24,
          "coinsPerHour": 3915,
          "price": 3506000,
          "roiHours": 895.5300128
        },
        {
          "level": 25,
          "coinsPerHour": 4263,
          "price": 4189000,
          "roiHours": 982.6413324
        },
        {
          "level": 26,
          "coinsPerHour": 4733,
          "price": 5006000,
          "roiHours": 1057.680118
        },
        {
          "level": 27,
          "coinsPerHour": 5367,
          "price": 5982000,
          "roiHours": 1114.589156
        },
        {
          "level": 28,
          "coinsPerHour": 6224,
          "price": 7149000,
          "roiHours": 1148.618252
        },
        {
          "level": 29,
          "coinsPerHour": 7380,
          "price": 8543000,
          "roiHours": 1157.588076
        },
        {
          "level": 30,
          "coinsPerHour": 8941,
          "price": 10209000,
          "roiHours": 1141.818589
        },
        {
          "level": 31,
          "coinsPerHour": 11049,
          "price": 12199000,
          "roiHours": 1104.081817
        },
        {
          "level": 32,
          "coinsPerHour": 13894,
          "price": 14578000,
          "roiHours": 1049.229883
        },
        {
          "level": 33,
          "coinsPerHour": 17734,
          "price": 17421000,
          "roiHours": 982.3502876
        },
        {
          "level": 34,
          "coinsPerHour": 22919,
          "price": 20818000,
          "roiHours": 908.3293337
        },
        {
          "level": 35,
          "coinsPerHour": 29919,
          "price": 24877000,
          "roiHours": 831.4783248
        },
        {
          "level": 36,
          "coinsPerHour": 39369,
          "price": 29728000,
          "roiHours": 755.1118901
        },
        {
          "level": 37,
          "coinsPerHour": 52126,
          "price": 35526000,
          "roiHours": 681.5408817
        },
        {
          "level": 38,
          "coinsPerHour": 69348,
          "price": 42453000,
          "roiHours": 612.1733864
        },
        {
          "level": 39,
          "coinsPerHour": 92597,
          "price": 50731000,
          "roiHours": 547.8687214
        },
        {
          "level": 40,
          "coinsPerHour": 123985,
          "price": 60624000,
          "roiHours": 488.9623745
        },
        {
          "level": 41,
          "coinsPerHour": 166357,
          "price": 72446000,
          "roiHours": 435.4851314
        },
        {
          "level": 42,
          "coinsPerHour": 223560,
          "price": 86573000,
          "roiHours": 387.2472714
        },
        {
          "level": 43,
          "coinsPerHour": 300784,
          "price": 103454000,
          "roiHours": 343.9478164
        },
        {
          "level": 44,
          "coinsPerHour": 405037,
          "price": 123628000,
          "roiHours": 305.2264361
        },
        {
          "level": 45,
          "coinsPerHour": 4375,
          "price": 147735000,
          "roiHours": 33768
        },
        {
          "level": 46,
          "coinsPerHour": 4637,
          "price": 176543000,
          "roiHours": 38072.6763
        },
        {
          "level": 47,
          "coinsPerHour": 4946,
          "price": 210969000,
          "roiHours": 42654.46826
        },
        {
          "level": 48,
          "coinsPerHour": 5310,
          "price": 252108000,
          "roiHours": 47477.9661
        },
        {
          "level": 49,
          "coinsPerHour": 5741,
          "price": 301270000,
          "roiHours": 52476.9204
        },
        {
          "level": 50,
          "coinsPerHour": 6248,
          "price": 360017000,
          "roiHours": 57621.15877
        },
        {
          "level": 51,
          "coinsPerHour": 6847,
          "price": 430221000,
          "roiHours": 62833.50372
        },
        {
          "level": 52,
          "coinsPerHour": 7554,
          "price": 514000000,
          "roiHours": 68043.4207
        },
        {
          "level": 53,
          "coinsPerHour": 8388,
          "price": 614000000,
          "roiHours": 73199.80925
        },
        {
          "level": 54,
          "coinsPerHour": 9373,
          "price": 734000000,
          "roiHours": 78310.03948
        },
        {
          "level": 55,
          "coinsPerHour": 10534,
          "price": 877000000,
          "roiHours": 83254.22442
        },
        {
          "level": 56,
          "coinsPerHour": 11905,
          "price": 1048000000,
          "roiHours": 88030.2394
        },
        {
          "level": 57,
          "coinsPerHour": 13522,
          "price": 1253000000,
          "roiHours": 92663.80713
        },
        {
          "level": 58,
          "coinsPerHour": 15430,
          "price": 1497000000,
          "roiHours": 97018.79456
        },
        {
          "level": 59,
          "coinsPerHour": 17682,
          "price": 1789000000,
          "roiHours": 101176.3375
        },
        {
          "level": 60,
          "coinsPerHour": 20340,
          "price": 2138000000,
          "roiHours": 105113.0777
        }
      ]
    },
    {
      "id": 12,
      "name": "Poor Hamdes",
      "image": poorHamdes,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 4725,
          "price": 94250,
          "roiHours": 19.94708995
        },
        {
          "level": 2,
          "coinsPerHour": 4726,
          "price": 110273,
          "roiHours": 23.3332628
        },
        {
          "level": 3,
          "coinsPerHour": 4726,
          "price": 129019,
          "roiHours": 27.29983072
        },
        {
          "level": 4,
          "coinsPerHour": 4727,
          "price": 150952,
          "roiHours": 31.93399619
        },
        {
          "level": 5,
          "coinsPerHour": 4727,
          "price": 176614,
          "roiHours": 37.36280939
        },
        {
          "level": 6,
          "coinsPerHour": 4727,
          "price": 206638,
          "roiHours": 43.7144066
        },
        {
          "level": 7,
          "coinsPerHour": 4727,
          "price": 241767,
          "roiHours": 51.14596996
        },
        {
          "level": 8,
          "coinsPerHour": 4728,
          "price": 282867,
          "roiHours": 59.82804569
        },
        {
          "level": 9,
          "coinsPerHour": 4728,
          "price": 330954,
          "roiHours": 69.99873096
        },
        {
          "level": 10,
          "coinsPerHour": 4729,
          "price": 387217,
          "roiHours": 81.88137027
        },
        {
          "level": 11,
          "coinsPerHour": 4729,
          "price": 453044,
          "roiHours": 95.80122647
        },
        {
          "level": 12,
          "coinsPerHour": 4730,
          "price": 530000,
          "roiHours": 112.05074
        },
        {
          "level": 13,
          "coinsPerHour": 4731,
          "price": 620000,
          "roiHours": 131.0505179
        },
        {
          "level": 14,
          "coinsPerHour": 4732,
          "price": 726000,
          "roiHours": 153.4234996
        },
        {
          "level": 15,
          "coinsPerHour": 4733,
          "price": 849000,
          "roiHours": 179.3788295
        },
        {
          "level": 16,
          "coinsPerHour": 4734,
          "price": 993000,
          "roiHours": 209.7591888
        },
        {
          "level": 17,
          "coinsPerHour": 4736,
          "price": 1162000,
          "roiHours": 245.3547297
        },
        {
          "level": 18,
          "coinsPerHour": 4737,
          "price": 1360000,
          "roiHours": 287.1015411
        },
        {
          "level": 19,
          "coinsPerHour": 4739,
          "price": 1591000,
          "roiHours": 335.7248365
        },
        {
          "level": 20,
          "coinsPerHour": 4742,
          "price": 1861000,
          "roiHours": 392.4504429
        },
        {
          "level": 21,
          "coinsPerHour": 4744,
          "price": 2178000,
          "roiHours": 459.1062395
        },
        {
          "level": 22,
          "coinsPerHour": 4748,
          "price": 2548000,
          "roiHours": 536.6470093
        },
        {
          "level": 23,
          "coinsPerHour": 4751,
          "price": 2981000,
          "roiHours": 627.4468533
        },
        {
          "level": 24,
          "coinsPerHour": 4755,
          "price": 3488000,
          "roiHours": 733.5436383
        },
        {
          "level": 25,
          "coinsPerHour": 4760,
          "price": 4081000,
          "roiHours": 857.3529412
        },
        {
          "level": 26,
          "coinsPerHour": 4766,
          "price": 4775000,
          "roiHours": 1001.888376
        },
        {
          "level": 27,
          "coinsPerHour": 4772,
          "price": 5586000,
          "roiHours": 1170.578374
        },
        {
          "level": 28,
          "coinsPerHour": 4780,
          "price": 6536000,
          "roiHours": 1367.364017
        },
        {
          "level": 29,
          "coinsPerHour": 4789,
          "price": 7647000,
          "roiHours": 1596.784297
        },
        {
          "level": 30,
          "coinsPerHour": 4799,
          "price": 8947000,
          "roiHours": 1864.346739
        },
        {
          "level": 31,
          "coinsPerHour": 4811,
          "price": 10468000,
          "roiHours": 2175.847017
        },
        {
          "level": 32,
          "coinsPerHour": 4825,
          "price": 12247000,
          "roiHours": 2538.238342
        },
        {
          "level": 33,
          "coinsPerHour": 4841,
          "price": 14329000,
          "roiHours": 2959.925635
        },
        {
          "level": 34,
          "coinsPerHour": 4859,
          "price": 16765000,
          "roiHours": 3450.298415
        },
        {
          "level": 35,
          "coinsPerHour": 4880,
          "price": 19616000,
          "roiHours": 4019.672131
        },
        {
          "level": 36,
          "coinsPerHour": 4905,
          "price": 22959000,
          "roiHours": 4680.733945
        },
        {
          "level": 37,
          "coinsPerHour": 4934,
          "price": 26852000,
          "roiHours": 5442.237535
        },
        {
          "level": 38,
          "coinsPerHour": 4968,
          "price": 31417000,
          "roiHours": 6323.872786
        },
        {
          "level": 39,
          "coinsPerHour": 5006,
          "price": 36757000,
          "roiHours": 7342.588893
        },
        {
          "level": 40,
          "coinsPerHour": 5051,
          "price": 43006000,
          "roiHours": 8514.353593
        },
        {
          "level": 41,
          "coinsPerHour": 5104,
          "price": 50317000,
          "roiHours": 9858.346395
        },
        {
          "level": 42,
          "coinsPerHour": 5164,
          "price": 58871000,
          "roiHours": 11400.27111
        },
        {
          "level": 43,
          "coinsPerHour": 5235,
          "price": 68879000,
          "roiHours": 13157.4021
        },
        {
          "level": 44,
          "coinsPerHour": 5316,
          "price": 80589000,
          "roiHours": 15159.70655
        },
        {
          "level": 45,
          "coinsPerHour": 5411,
          "price": 94289000,
          "roiHours": 17425.42968
        },
        {
          "level": 46,
          "coinsPerHour": 5520,
          "price": 110318000,
          "roiHours": 19985.14493
        },
        {
          "level": 47,
          "coinsPerHour": 5648,
          "price": 129072000,
          "roiHours": 22852.69122
        },
        {
          "level": 48,
          "coinsPerHour": 5795,
          "price": 151014000,
          "roiHours": 26059.36152
        },
        {
          "level": 49,
          "coinsPerHour": 5967,
          "price": 176686000,
          "roiHours": 29610.52455
        },
        {
          "level": 50,
          "coinsPerHour": 6165,
          "price": 206723000,
          "roiHours": 33531.71127
        },
        {
          "level": 51,
          "coinsPerHour": 6396,
          "price": 241866000,
          "roiHours": 37815.197
        },
        {
          "level": 52,
          "coinsPerHour": 6663,
          "price": 282983000,
          "roiHours": 42470.80894
        },
        {
          "level": 53,
          "coinsPerHour": 6973,
          "price": 331090000,
          "roiHours": 47481.71519
        },
        {
          "level": 54,
          "coinsPerHour": 7333,
          "price": 387375000,
          "roiHours": 52826.26483
        },
        {
          "level": 55,
          "coinsPerHour": 7750,
          "price": 453229000,
          "roiHours": 58481.16129
        },
        {
          "level": 56,
          "coinsPerHour": 8234,
          "price": 530000000,
          "roiHours": 64367.25771
        },
        {
          "level": 57,
          "coinsPerHour": 8795,
          "price": 620000000,
          "roiHours": 70494.5992
        },
        {
          "level": 58,
          "coinsPerHour": 9447,
          "price": 726000000,
          "roiHours": 76849.79359
        },
        {
          "level": 59,
          "coinsPerHour": 10202,
          "price": 849000000,
          "roiHours": 83218.97667
        },
        {
          "level": 60,
          "coinsPerHour": 11079,
          "price": 994000000,
          "roiHours": 89719.28874
        }
      ]
    },
    {
      "id": 13,
      "name": "Hamsterita",
      "image": hamsterita,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 7645,
          "price": 152500,
          "roiHours": 19.94767822
        },
        {
          "level": 2,
          "coinsPerHour": 7646,
          "price": 187575,
          "roiHours": 24.53243526
        },
        {
          "level": 3,
          "coinsPerHour": 7647,
          "price": 230717,
          "roiHours": 30.1709167
        },
        {
          "level": 4,
          "coinsPerHour": 7647,
          "price": 283782,
          "roiHours": 37.11023931
        },
        {
          "level": 5,
          "coinsPerHour": 7647,
          "price": 349052,
          "roiHours": 45.64561266
        },
        {
          "level": 6,
          "coinsPerHour": 7648,
          "price": 429334,
          "roiHours": 56.13676778
        },
        {
          "level": 7,
          "coinsPerHour": 7648,
          "price": 528000,
          "roiHours": 69.0376569
        },
        {
          "level": 8,
          "coinsPerHour": 7649,
          "price": 650000,
          "roiHours": 84.97842855
        },
        {
          "level": 9,
          "coinsPerHour": 7650,
          "price": 799000,
          "roiHours": 104.4444444
        },
        {
          "level": 10,
          "coinsPerHour": 7651,
          "price": 983000,
          "roiHours": 128.4799373
        },
        {
          "level": 11,
          "coinsPerHour": 7653,
          "price": 1209000,
          "roiHours": 157.9772638
        },
        {
          "level": 12,
          "coinsPerHour": 7655,
          "price": 1487000,
          "roiHours": 194.2521228
        },
        {
          "level": 13,
          "coinsPerHour": 7657,
          "price": 1829000,
          "roiHours": 238.8663968
        },
        {
          "level": 14,
          "coinsPerHour": 7660,
          "price": 2249000,
          "roiHours": 293.6031332
        },
        {
          "level": 15,
          "coinsPerHour": 7663,
          "price": 2767000,
          "roiHours": 361.0857367
        },
        {
          "level": 16,
          "coinsPerHour": 7667,
          "price": 3403000,
          "roiHours": 443.8502674
        },
        {
          "level": 17,
          "coinsPerHour": 7672,
          "price": 4186000,
          "roiHours": 545.620438
        },
        {
          "level": 18,
          "coinsPerHour": 7679,
          "price": 5148000,
          "roiHours": 670.3997916
        },
        {
          "level": 19,
          "coinsPerHour": 7687,
          "price": 6332000,
          "roiHours": 823.7283726
        },
        {
          "level": 20,
          "coinsPerHour": 7696,
          "price": 7789000,
          "roiHours": 1012.0842
        },
        {
          "level": 21,
          "coinsPerHour": 7708,
          "price": 9560000,
          "roiHours": 1240.26985
        },
        {
          "level": 22,
          "coinsPerHour": 7722,
          "price": 11784000,
          "roiHours": 1526.029526
        },
        {
          "level": 23,
          "coinsPerHour": 7740,
          "price": 14494000,
          "roiHours": 1872.609819
        },
        {
          "level": 24,
          "coinsPerHour": 7762,
          "price": 17827000,
          "roiHours": 2296.701881
        },
        {
          "level": 25,
          "coinsPerHour": 7789,
          "price": 21928000,
          "roiHours": 2815.252279
        },
        {
          "level": 26,
          "coinsPerHour": 7822,
          "price": 26971000,
          "roiHours": 3448.095116
        },
        {
          "level": 27,
          "coinsPerHour": 7863,
          "price": 33174000,
          "roiHours": 4219.000382
        },
        {
          "level": 28,
          "coinsPerHour": 7913,
          "price": 40804000,
          "roiHours": 5156.577783
        },
        {
          "level": 29,
          "coinsPerHour": 7974,
          "price": 50190000,
          "roiHours": 6294.20617
        },
        {
          "level": 30,
          "coinsPerHour": 8050,
          "price": 61733000,
          "roiHours": 7668.695652
        },
        {
          "level": 31,
          "coinsPerHour": 8143,
          "price": 75932000,
          "roiHours": 9324.818863
        },
        {
          "level": 32,
          "coinsPerHour": 8257,
          "price": 93396000,
          "roiHours": 11311.12995
        },
        {
          "level": 33,
          "coinsPerHour": 8398,
          "price": 114877000,
          "roiHours": 13679.09026
        },
        {
          "level": 34,
          "coinsPerHour": 8572,
          "price": 141299000,
          "roiHours": 16483.78441
        },
        {
          "level": 35,
          "coinsPerHour": 9785,
          "price": 173798000,
          "roiHours": 17761.67603
        },
        {
          "level": 36,
          "coinsPerHour": 9047,
          "price": 213771000,
          "roiHours": 23628.93777
        },
        {
          "level": 37,
          "coinsPerHour": 9369,
          "price": 262938000,
          "roiHours": 28064.6814
        },
        {
          "level": 38,
          "coinsPerHour": 9766,
          "price": 323414000,
          "roiHours": 33116.32193
        },
        {
          "level": 39,
          "coinsPerHour": 10254,
          "price": 397799000,
          "roiHours": 38794.51921
        },
        {
          "level": 40,
          "coinsPerHour": 10853,
          "price": 489293000,
          "roiHours": 45083.6635
        },
        {
          "level": 41,
          "coinsPerHour": 11591,
          "price": 602000000,
          "roiHours": 51936.84755
        },
        {
          "level": 42,
          "coinsPerHour": 12499,
          "price": 740000000,
          "roiHours": 59204.73638
        },
        {
          "level": 43,
          "coinsPerHour": 13616,
          "price": 911000000,
          "roiHours": 66906.58049
        },
        {
          "level": 44,
          "coinsPerHour": 14989,
          "price": 1120000000,
          "roiHours": 74721.46241
        },
        {
          "level": 45,
          "coinsPerHour": 16678,
          "price": 1378000000,
          "roiHours": 82623.81581
        },
        {
          "level": 46,
          "coinsPerHour": 18755,
          "price": 1694000000,
          "roiHours": 90322.58065
        }
      ]
    },
    {
      "id": 14,
      "name": "HamJinn",
      "image": hamJinn,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 12370,
          "price": 246750,
          "roiHours": 19.94745352
        },
        {
          "level": 2,
          "coinsPerHour": 12371,
          "price": 315849,
          "roiHours": 25.53140409
        },
        {
          "level": 3,
          "coinsPerHour": 12372,
          "price": 404275,
          "roiHours": 32.67660847
        },
        {
          "level": 4,
          "coinsPerHour": 12372,
          "price": 517000,
          "roiHours": 41.78790818
        },
        {
          "level": 5,
          "coinsPerHour": 12373,
          "price": 662000,
          "roiHours": 53.50359654
        },
        {
          "level": 6,
          "coinsPerHour": 12374,
          "price": 848000,
          "roiHours": 68.53079037
        },
        {
          "level": 7,
          "coinsPerHour": 12375,
          "price": 1085000,
          "roiHours": 87.67676768
        },
        {
          "level": 8,
          "coinsPerHour": 12377,
          "price": 1289000,
          "roiHours": 104.1447847
        },
        {
          "level": 9,
          "coinsPerHour": 12379,
          "price": 1778000,
          "roiHours": 143.6303417
        },
        {
          "level": 10,
          "coinsPerHour": 12381,
          "price": 2276000,
          "roiHours": 183.8300622
        },
        {
          "level": 11,
          "coinsPerHour": 12385,
          "price": 2913000,
          "roiHours": 235.2038757
        },
        {
          "level": 12,
          "coinsPerHour": 12389,
          "price": 3729000,
          "roiHours": 300.9928162
        },
        {
          "level": 13,
          "coinsPerHour": 12396,
          "price": 4773000,
          "roiHours": 385.0435624
        },
        {
          "level": 14,
          "coinsPerHour": 12403,
          "price": 6109000,
          "roiHours": 492.5421269
        },
        {
          "level": 15,
          "coinsPerHour": 12414,
          "price": 7820000,
          "roiHours": 629.9339455
        },
        {
          "level": 16,
          "coinsPerHour": 12427,
          "price": 10009000,
          "roiHours": 805.4236743
        },
        {
          "level": 17,
          "coinsPerHour": 12445,
          "price": 12812000,
          "roiHours": 1029.489755
        },
        {
          "level": 18,
          "coinsPerHour": 12469,
          "price": 16399000,
          "roiHours": 1315.18165
        },
        {
          "level": 19,
          "coinsPerHour": 12499,
          "price": 20991000,
          "roiHours": 1679.414353
        },
        {
          "level": 20,
          "coinsPerHour": 12539,
          "price": 26869000,
          "roiHours": 2142.834357
        },
        {
          "level": 21,
          "coinsPerHour": 12592,
          "price": 34392000,
          "roiHours": 2731.257942
        },
        {
          "level": 22,
          "coinsPerHour": 12660,
          "price": 44022000,
          "roiHours": 3477.251185
        },
        {
          "level": 23,
          "coinsPerHour": 12750,
          "price": 56348000,
          "roiHours": 4419.45098
        },
        {
          "level": 24,
          "coinsPerHour": 12868,
          "price": 72125000,
          "roiHours": 5604.98912
        },
        {
          "level": 25,
          "coinsPerHour": 13022,
          "price": 92320000,
          "roiHours": 7089.540777
        },
        {
          "level": 26,
          "coinsPerHour": 13225,
          "price": 118170000,
          "roiHours": 8935.349716
        },
        {
          "level": 27,
          "coinsPerHour": 13490,
          "price": 151257000,
          "roiHours": 11212.5278
        },
        {
          "level": 28,
          "coinsPerHour": 13837,
          "price": 193609000,
          "roiHours": 13992.12257
        },
        {
          "level": 29,
          "coinsPerHour": 14291,
          "price": 247820000,
          "roiHours": 17340.98384
        },
        {
          "level": 30,
          "coinsPerHour": 14887,
          "price": 317210000,
          "roiHours": 21307.85249
        },
        {
          "level": 31,
          "coinsPerHour": 15667,
          "price": 406028000,
          "roiHours": 25916.12944
        },
        {
          "level": 32,
          "coinsPerHour": 16689,
          "price": 520000000,
          "roiHours": 31158.24795
        },
        {
          "level": 33,
          "coinsPerHour": 18028,
          "price": 665000000,
          "roiHours": 36887.06457
        },
        {
          "level": 34,
          "coinsPerHour": 19782,
          "price": 852000000,
          "roiHours": 43069.45708
        },
        {
          "level": 35,
          "coinsPerHour": 22080,
          "price": 1090000000,
          "roiHours": 49365.94203
        },
        {
          "level": 36,
          "coinsPerHour": 25090,
          "price": 1395000000,
          "roiHours": 55599.84057
        },
        {
          "level": 37,
          "coinsPerHour": 29034,
          "price": 1786000000,
          "roiHours": 61514.08693
        },
        {
          "level": 38,
          "coinsPerHour": 34199,
          "price": 2286000000,
          "roiHours": 66844.05977
        },
        {
          "level": 39,
          "coinsPerHour": 40966,
          "price": 2926000000,
          "roiHours": 71425.08422
        },
        {
          "level": 40,
          "coinsPerHour": 49831,
          "price": 3745000000,
          "roiHours": 75154.02059
        },
        {
          "level": 41,
          "coinsPerHour": 61444,
          "price": 4794000000,
          "roiHours": 78022.26418
        },
        {
          "level": 42,
          "coinsPerHour": 76657,
          "price": 6136000000,
          "roiHours": 80044.87522
        },
        {
          "level": 43,
          "coinsPerHour": 96586,
          "price": 7854000000,
          "roiHours": 81316.13277
        },
        {
          "level": 44,
          "coinsPerHour": 122693,
          "price": 10053000000,
          "roiHours": 81936.21478
        },
        {
          "level": 45,
          "coinsPerHour": 156893,
          "price": 12868000000,
          "roiHours": 82017.68084
        },
        {
          "level": 46,
          "coinsPerHour": 201695,
          "price": 16470000000,
          "roiHours": 81657.94888
        },
        {
          "level": 47,
          "coinsPerHour": 260386,
          "price": 21082000000,
          "roiHours": 80964.41437
        },
        {
          "level": 48,
          "coinsPerHour": 337271,
          "price": 26985000000,
          "roiHours": 80009.84372
        },
        {
          "level": 49,
          "coinsPerHour": 437990,
          "price": 34541000000,
          "roiHours": 78862.53111
        },
        {
          "level": 50,
          "coinsPerHour": 570000,
          "price": 44213000000,
          "roiHours": 77566.66667
        },
        {
          "level": 51,
          "coinsPerHour": 743000,
          "price": 56592000000,
          "roiHours": 76166.89098
        },
        {
          "level": 52,
          "coinsPerHour": 969000,
          "price": 72438000000,
          "roiHours": 74755.41796
        }
      ]
    },
    {
      "id": 15,
      "name": "Mr. Hamster",
      "image": mrHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 20015,
          "price": 399250,
          "roiHours": 19.94753935
        },
        {
          "level": 2,
          "coinsPerHour": 20016,
          "price": 471115,
          "roiHours": 23.53692046
        },
        {
          "level": 3,
          "coinsPerHour": 20016,
          "price": 556000,
          "roiHours": 27.77777778
        },
        {
          "level": 4,
          "coinsPerHour": 20017,
          "price": 656000,
          "roiHours": 32.77214368
        },
        {
          "level": 5,
          "coinsPerHour": 20017,
          "price": 774000,
          "roiHours": 38.66713294
        },
        {
          "level": 6,
          "coinsPerHour": 20017,
          "price": 913000,
          "roiHours": 45.61123045
        },
        {
          "level": 7,
          "coinsPerHour": 20017,
          "price": 1078000,
          "roiHours": 53.85422391
        },
        {
          "level": 8,
          "coinsPerHour": 20018,
          "price": 1272000,
          "roiHours": 63.54281147
        },
        {
          "level": 9,
          "coinsPerHour": 20018,
          "price": 1501000,
          "roiHours": 74.98251574
        },
        {
          "level": 10,
          "coinsPerHour": 20019,
          "price": 1771000,
          "roiHours": 88.46595734
        },
        {
          "level": 11,
          "coinsPerHour": 20019,
          "price": 2090000,
          "roiHours": 104.4008192
        },
        {
          "level": 12,
          "coinsPerHour": 20020,
          "price": 2466000,
          "roiHours": 123.1768232
        },
        {
          "level": 13,
          "coinsPerHour": 20021,
          "price": 2910000,
          "roiHours": 145.3473852
        },
        {
          "level": 14,
          "coinsPerHour": 20022,
          "price": 3433000,
          "roiHours": 171.4613925
        },
        {
          "level": 15,
          "coinsPerHour": 20023,
          "price": 4051000,
          "roiHours": 202.3173351
        },
        {
          "level": 16,
          "coinsPerHour": 20024,
          "price": 4781000,
          "roiHours": 238.7634838
        },
        {
          "level": 17,
          "coinsPerHour": 20026,
          "price": 5641000,
          "roiHours": 281.683811
        },
        {
          "level": 18,
          "coinsPerHour": 20027,
          "price": 6656000,
          "roiHours": 332.3513257
        },
        {
          "level": 19,
          "coinsPerHour": 20029,
          "price": 7855000,
          "roiHours": 392.1813371
        },
        {
          "level": 20,
          "coinsPerHour": 20032,
          "price": 9268000,
          "roiHours": 462.6597444
        },
        {
          "level": 21,
          "coinsPerHour": 20034,
          "price": 10937000,
          "roiHours": 545.9219327
        },
        {
          "level": 22,
          "coinsPerHour": 20038,
          "price": 12905000,
          "roiHours": 644.0263499
        },
        {
          "level": 23,
          "coinsPerHour": 20041,
          "price": 15228000,
          "roiHours": 759.8423232
        },
        {
          "level": 24,
          "coinsPerHour": 20045,
          "price": 17969000,
          "roiHours": 896.4330257
        },
        {
          "level": 25,
          "coinsPerHour": 20050,
          "price": 21204000,
          "roiHours": 1057.55611
        },
        {
          "level": 26,
          "coinsPerHour": 20056,
          "price": 25020000,
          "roiHours": 1247.50698
        },
        {
          "level": 27,
          "coinsPerHour": 20062,
          "price": 29524000,
          "roiHours": 1471.637922
        },
        {
          "level": 28,
          "coinsPerHour": 20070,
          "price": 34838000,
          "roiHours": 1735.824614
        },
        {
          "level": 29,
          "coinsPerHour": 20079,
          "price": 41109000,
          "roiHours": 2047.362916
        },
        {
          "level": 30,
          "coinsPerHour": 20089,
          "price": 48509000,
          "roiHours": 2414.704565
        },
        {
          "level": 31,
          "coinsPerHour": 20101,
          "price": 57241000,
          "roiHours": 2847.66927
        },
        {
          "level": 32,
          "coinsPerHour": 20115,
          "price": 67544000,
          "roiHours": 3357.89212
        },
        {
          "level": 33,
          "coinsPerHour": 20131,
          "price": 79702000,
          "roiHours": 3959.167453
        },
        {
          "level": 34,
          "coinsPerHour": 20149,
          "price": 94048000,
          "roiHours": 4667.626185
        },
        {
          "level": 35,
          "coinsPerHour": 20170,
          "price": 110977000,
          "roiHours": 5502.0823
        },
        {
          "level": 36,
          "coinsPerHour": 20195,
          "price": 130953000,
          "roiHours": 6484.426838
        },
        {
          "level": 37,
          "coinsPerHour": 20224,
          "price": 154524000,
          "roiHours": 7640.625
        },
        {
          "level": 38,
          "coinsPerHour": 20258,
          "price": 182339000,
          "roiHours": 9000.839175
        },
        {
          "level": 39,
          "coinsPerHour": 20296,
          "price": 215160000,
          "roiHours": 10601.10367
        },
        {
          "level": 40,
          "coinsPerHour": 20341,
          "price": 253889000,
          "roiHours": 12481.63807
        },
        {
          "level": 41,
          "coinsPerHour": 20394,
          "price": 299589000,
          "roiHours": 14690.0559
        },
        {
          "level": 42,
          "coinsPerHour": 20454,
          "price": 353514000,
          "roiHours": 17283.36756
        },
        {
          "level": 43,
          "coinsPerHour": 20525,
          "price": 417147000,
          "roiHours": 20323.84896
        },
        {
          "level": 44,
          "coinsPerHour": 20606,
          "price": 492234000,
          "roiHours": 23887.89673
        },
        {
          "level": 45,
          "coinsPerHour": 20701,
          "price": 581000000,
          "roiHours": 28066.27699
        },
        {
          "level": 46,
          "coinsPerHour": 20810,
          "price": 685000000,
          "roiHours": 32916.86689
        },
        {
          "level": 47,
          "coinsPerHour": 20938,
          "price": 809000000,
          "roiHours": 38637.88327
        },
        {
          "level": 48,
          "coinsPerHour": 21085,
          "price": 954000000,
          "roiHours": 45245.43514
        },
        {
          "level": 49,
          "coinsPerHour": 21257,
          "price": 1126000000,
          "roiHours": 52970.78609
        },
        {
          "level": 50,
          "coinsPerHour": 21455,
          "price": 1329000000,
          "roiHours": 61943.60289
        },
        {
          "level": 51,
          "coinsPerHour": 21686,
          "price": 1586000000,
          "roiHours": 73134.74131
        },
        {
          "level": 52,
          "coinsPerHour": 21953,
          "price": 1850000000,
          "roiHours": 84270.94247
        },
        {
          "level": 53,
          "coinsPerHour": 22263,
          "price": 2183000000,
          "roiHours": 98055.06895
        },
        {
          "level": 54,
          "coinsPerHour": 22623,
          "price": 2576000000,
          "roiHours": 113866.4191
        },
        {
          "level": 55,
          "coinsPerHour": 23040,
          "price": 3040000000,
          "roiHours": 131944.4444
        },
        {
          "level": 56,
          "coinsPerHour": 23524,
          "price": 3587000000,
          "roiHours": 152482.571
        },
        {
          "level": 57,
          "coinsPerHour": 24085,
          "price": 4233000000,
          "roiHours": 175752.5431
        },
        {
          "level": 58,
          "coinsPerHour": 24737,
          "price": 4995000000,
          "roiHours": 201924.243
        },
        {
          "level": 59,
          "coinsPerHour": 25492,
          "price": 5894000000,
          "roiHours": 231209.7913
        },
        {
          "level": 60,
          "coinsPerHour": 26369,
          "price": 6955000000,
          "roiHours": 263756.684
        }
      ]
    },
    {
      "id": 16,
      "name": "Big Boss Hamster",
      "image": bigBossHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 32385,
          "price": 646000,
          "roiHours": 19.94750656
        },
        {
          "level": 2,
          "coinsPerHour": 20016,
          "price": 775000,
          "roiHours": 38.71902478
        },
        {
          "level": 3,
          "coinsPerHour": 20016,
          "price": 930000,
          "roiHours": 46.46282974
        },
        {
          "level": 4,
          "coinsPerHour": 20017,
          "price": 1116000,
          "roiHours": 55.75261028
        },
        {
          "level": 5,
          "coinsPerHour": 20017,
          "price": 1340000,
          "roiHours": 66.94309837
        },
        {
          "level": 6,
          "coinsPerHour": 20018,
          "price": 1607000,
          "roiHours": 80.27775002
        },
        {
          "level": 7,
          "coinsPerHour": 20018,
          "price": 1929000,
          "roiHours": 96.36327305
        },
        {
          "level": 8,
          "coinsPerHour": 20019,
          "price": 2315000,
          "roiHours": 115.6401419
        },
        {
          "level": 9,
          "coinsPerHour": 20020,
          "price": 2778000,
          "roiHours": 138.7612388
        },
        {
          "level": 10,
          "coinsPerHour": 20021,
          "price": 3333000,
          "roiHours": 166.475201
        },
        {
          "level": 11,
          "coinsPerHour": 20022,
          "price": 4000000,
          "roiHours": 199.7802417
        },
        {
          "level": 12,
          "coinsPerHour": 20024,
          "price": 4800000,
          "roiHours": 239.7123452
        },
        {
          "level": 13,
          "coinsPerHour": 20026,
          "price": 5760000,
          "roiHours": 287.6260861
        },
        {
          "level": 14,
          "coinsPerHour": 20028,
          "price": 6912000,
          "roiHours": 345.1168364
        },
        {
          "level": 15,
          "coinsPerHour": 20031,
          "price": 8294000,
          "roiHours": 414.0582098
        },
        {
          "level": 16,
          "coinsPerHour": 20035,
          "price": 9953000,
          "roiHours": 496.7806339
        },
        {
          "level": 17,
          "coinsPerHour": 20039,
          "price": 11944000,
          "roiHours": 596.0377264
        },
        {
          "level": 18,
          "coinsPerHour": 20044,
          "price": 14332000,
          "roiHours": 715.0269407
        },
        {
          "level": 19,
          "coinsPerHour": 20051,
          "price": 17199000,
          "roiHours": 857.7627051
        },
        {
          "level": 20,
          "coinsPerHour": 20059,
          "price": 20638000,
          "roiHours": 1028.864849
        },
        {
          "level": 21,
          "coinsPerHour": 20068,
          "price": 24766000,
          "roiHours": 1234.104046
        },
        {
          "level": 22,
          "coinsPerHour": 20080,
          "price": 29719000,
          "roiHours": 1480.02988
        },
        {
          "level": 23,
          "coinsPerHour": 20094,
          "price": 35663000,
          "roiHours": 1774.808401
        },
        {
          "level": 24,
          "coinsPerHour": 20112,
          "price": 42796000,
          "roiHours": 2127.88385
        },
        {
          "level": 25,
          "coinsPerHour": 20133,
          "price": 51355000,
          "roiHours": 2550.787265
        },
        {
          "level": 26,
          "coinsPerHour": 20159,
          "price": 61626000,
          "roiHours": 3056.996875
        },
        {
          "level": 27,
          "coinsPerHour": 20191,
          "price": 73951000,
          "roiHours": 3662.572433
        },
        {
          "level": 28,
          "coinsPerHour": 20230,
          "price": 88741000,
          "roiHours": 4386.604053
        },
        {
          "level": 29,
          "coinsPerHour": 20277,
          "price": 106490000,
          "roiHours": 5251.763081
        },
        {
          "level": 30,
          "coinsPerHour": 20334,
          "price": 127788000,
          "roiHours": 6284.44969
        },
        {
          "level": 31,
          "coinsPerHour": 20405,
          "price": 153345000,
          "roiHours": 7515.069836
        },
        {
          "level": 32,
          "coinsPerHour": 20491,
          "price": 184014000,
          "roiHours": 8980.235225
        },
        {
          "level": 33,
          "coinsPerHour": 20595,
          "price": 220817000,
          "roiHours": 10721.87424
        },
        {
          "level": 34,
          "coinsPerHour": 20723,
          "price": 264980000,
          "roiHours": 12786.75867
        },
        {
          "level": 35,
          "coinsPerHour": 20878,
          "price": 317976000,
          "roiHours": 15230.19446
        },
        {
          "level": 36,
          "coinsPerHour": 21068,
          "price": 381572000,
          "roiHours": 18111.44864
        },
        {
          "level": 37,
          "coinsPerHour": 21300,
          "price": 457886000,
          "roiHours": 21496.99531
        },
        {
          "level": 38,
          "coinsPerHour": 21583,
          "price": 549000000,
          "roiHours": 25436.68628
        },
        {
          "level": 39,
          "coinsPerHour": 21928,
          "price": 659000000,
          "roiHours": 30052.9004
        },
        {
          "level": 40,
          "coinsPerHour": 22349,
          "price": 791000000,
          "roiHours": 35393.08246
        },
        {
          "level": 41,
          "coinsPerHour": 22864,
          "price": 949000000,
          "roiHours": 41506.29811
        },
        {
          "level": 42,
          "coinsPerHour": 23488,
          "price": 1139000000,
          "roiHours": 48492.84741
        },
        {
          "level": 43,
          "coinsPerHour": 24253,
          "price": 1367000000,
          "roiHours": 56364.16113
        },
        {
          "level": 44,
          "coinsPerHour": 25185,
          "price": 1641000000,
          "roiHours": 65157.83204
        },
        {
          "level": 45,
          "coinsPerHour": 26322,
          "price": 1969000000,
          "roiHours": 74804.34617
        },
        {
          "level": 46,
          "coinsPerHour": 27710,
          "price": 2363000000,
          "roiHours": 85276.07362
        }
      ]
    },
    {
      "id": 22,
      "name": "Ofiice Hamster",
      "image": ofiiceHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 52400,
          "price": 1045250,
          "roiHours": 19.94751908
        },
        {
          "level": 2,
          "coinsPerHour": 52401,
          "price": 1306563,
          "roiHours": 24.93393256
        },
        {
          "level": 3,
          "coinsPerHour": 52402,
          "price": 1633203,
          "roiHours": 31.16680661
        },
        {
          "level": 4,
          "coinsPerHour": 52402,
          "price": 2041504,
          "roiHours": 38.95851303
        },
        {
          "level": 5,
          "coinsPerHour": 52403,
          "price": 2551880,
          "roiHours": 48.69721199
        },
        {
          "level": 6,
          "coinsPerHour": 52403,
          "price": 3189850,
          "roiHours": 60.87151499
        },
        {
          "level": 7,
          "coinsPerHour": 52404,
          "price": 3987312,
          "roiHours": 76.08793222
        },
        {
          "level": 8,
          "coinsPerHour": 52405,
          "price": 4984140,
          "roiHours": 95.10810037
        },
        {
          "level": 9,
          "coinsPerHour": 52406,
          "price": 6230175,
          "roiHours": 118.8828569
        },
        {
          "level": 10,
          "coinsPerHour": 52408,
          "price": 7787719,
          "roiHours": 148.5979049
        },
        {
          "level": 11,
          "coinsPerHour": 52410,
          "price": 9734649,
          "roiHours": 185.7402977
        },
        {
          "level": 12,
          "coinsPerHour": 52413,
          "price": 12168312,
          "roiHours": 232.1620972
        },
        {
          "level": 13,
          "coinsPerHour": 52416,
          "price": 15210389,
          "roiHours": 290.1859928
        },
        {
          "level": 14,
          "coinsPerHour": 52420,
          "price": 19012987,
          "roiHours": 362.7048264
        },
        {
          "level": 15,
          "coinsPerHour": 52425,
          "price": 23766233,
          "roiHours": 453.3377778
        },
        {
          "level": 16,
          "coinsPerHour": 52432,
          "price": 29707792,
          "roiHours": 566.5965822
        },
        {
          "level": 17,
          "coinsPerHour": 52440,
          "price": 37134740,
          "roiHours": 708.1376812
        },
        {
          "level": 18,
          "coinsPerHour": 52451,
          "price": 46418425,
          "roiHours": 884.9864636
        },
        {
          "level": 19,
          "coinsPerHour": 52464,
          "price": 58023031,
          "roiHours": 1105.958962
        },
        {
          "level": 20,
          "coinsPerHour": 52481,
          "price": 72528789,
          "roiHours": 1382.000896
        },
        {
          "level": 21,
          "coinsPerHour": 52502,
          "price": 90660986,
          "roiHours": 1726.810141
        },
        {
          "level": 22,
          "coinsPerHour": 52528,
          "price": 113326232,
          "roiHours": 2157.444258
        },
        {
          "level": 23,
          "coinsPerHour": 52561,
          "price": 141657790,
          "roiHours": 2695.112155
        },
        {
          "level": 24,
          "coinsPerHour": 52603,
          "price": 177072238,
          "roiHours": 3366.200369
        },
        {
          "level": 25,
          "coinsPerHour": 52656,
          "price": 221340297,
          "roiHours": 4203.515212
        },
        {
          "level": 26,
          "coinsPerHour": 52723,
          "price": 276675371,
          "roiHours": 5247.716765
        },
        {
          "level": 27,
          "coinsPerHour": 52807,
          "price": 345844214,
          "roiHours": 6549.211544
        },
        {
          "level": 28,
          "coinsPerHour": 52913,
          "price": 432305268,
          "roiHours": 8170.11449
        },
        {
          "level": 29,
          "coinsPerHour": 53046,
          "price": 540381585,
          "roiHours": 10187.03738
        },
        {
          "level": 30,
          "coinsPerHour": 53214,
          "price": 675476981,
          "roiHours": 12693.59531
        },
        {
          "level": 31,
          "coinsPerHour": 53426,
          "price": 844346226,
          "roiHours": 15804.03223
        },
        {
          "level": 32,
          "coinsPerHour": 53693,
          "price": 1055432782,
          "roiHours": 19656.80409
        },
        {
          "level": 33,
          "coinsPerHour": 54029,
          "price": 1319290978,
          "roiHours": 24418.20093
        },
        {
          "level": 34,
          "coinsPerHour": 54452,
          "price": 1649113722,
          "roiHours": 30285.64097
        },
        {
          "level": 35,
          "coinsPerHour": 54986,
          "price": 2061392153,
          "roiHours": 37489.40008
        },
        {
          "level": 36,
          "coinsPerHour": 55658,
          "price": 2576740191,
          "roiHours": 46295.9537
        },
        {
          "level": 37,
          "coinsPerHour": 56505,
          "price": 3220925239,
          "roiHours": 57002.48189
        },
        {
          "level": 38,
          "coinsPerHour": 57573,
          "price": 4026156549,
          "roiHours": 69931.33151
        },
        {
          "level": 39,
          "coinsPerHour": 58917,
          "price": 5032695686,
          "roiHours": 85420.09413
        },
        {
          "level": 40,
          "coinsPerHour": 60612,
          "price": 6291000000,
          "roiHours": 103791.3284
        },
        {
          "level": 41,
          "coinsPerHour": 65437,
          "price": 9829000000,
          "roiHours": 150205.5412
        },
        {
          "level": 42,
          "coinsPerHour": 68827,
          "price": 12287000000,
          "roiHours": 178520.0575
        }
      ]
    },
    {
      "id": 23,
      "name": "Fifi Hamster",
      "image": fifiHamster,
      "currentLevel": 0,
      "coinsPerHour": 0,
      "levels": [
        {
          "level": 1,
          "coinsPerHour": 84785,
          "price": 1691000,
          "roiHours": 19.94456567
        },
        {
          "level": 2,
          "coinsPerHour": 84746,
          "price": 2199000,
          "roiHours": 25.94812735
        },
        {
          "level": 3,
          "coinsPerHour": 84787,
          "price": 2858000,
          "roiHours": 33.70799769
        },
        {
          "level": 4,
          "coinsPerHour": 84787,
          "price": 3716000,
          "roiHours": 43.82747355
        },
        {
          "level": 5,
          "coinsPerHour": 84788,
          "price": 4830000,
          "roiHours": 56.96560834
        },
        {
          "level": 6,
          "coinsPerHour": 84788,
          "price": 6279000,
          "roiHours": 74.05529084
        },
        {
          "level": 7,
          "coinsPerHour": 84789,
          "price": 8163000,
          "roiHours": 96.27428086
        },
        {
          "level": 8,
          "coinsPerHour": 84791,
          "price": 10612000,
          "roiHours": 125.1547924
        },
        {
          "level": 9,
          "coinsPerHour": 84792,
          "price": 13796000,
          "roiHours": 162.7040287
        },
        {
          "level": 10,
          "coinsPerHour": 84794,
          "price": 17935000,
          "roiHours": 211.512607
        },
        {
          "level": 11,
          "coinsPerHour": 84797,
          "price": 23315000,
          "roiHours": 274.9507648
        },
        {
          "level": 12,
          "coinsPerHour": 84800,
          "price": 30310000,
          "roiHours": 357.4292453
        },
        {
          "level": 13,
          "coinsPerHour": 84804,
          "price": 39403000,
          "roiHours": 464.6361021
        },
        {
          "level": 14,
          "coinsPerHour": 84810,
          "price": 51244000,
          "roiHours": 604.2212003
        },
        {
          "level": 15,
          "coinsPerHour": 84817,
          "price": 66591000,
          "roiHours": 785.1138333
        },
        {
          "level": 16,
          "coinsPerHour": 84826,
          "price": 86568000,
          "roiHours": 1020.536156
        },
        {
          "level": 17,
          "coinsPerHour": 84837,
          "price": 112539000,
          "roiHours": 1326.532056
        },
        {
          "level": 18,
          "coinsPerHour": 84851,
          "price": 146300000,
          "roiHours": 1724.19889
        },
        {
          "level": 19,
          "coinsPerHour": 84870,
          "price": 190190000,
          "roiHours": 2240.956757
        },
        {
          "level": 20,
          "coinsPerHour": 84894,
          "price": 247247000,
          "roiHours": 2912.420195
        },
        {
          "level": 21,
          "coinsPerHour": 84924,
          "price": 321421000,
          "roiHours": 3784.807593
        },
        {
          "level": 22,
          "coinsPerHour": 84963,
          "price": 417848000,
          "roiHours": 4917.9996
        },
        {
          "level": 23,
          "coinsPerHour": 85013,
          "price": 543000000,
          "roiHours": 6387.258419
        },
        {
          "level": 24,
          "coinsPerHour": 85077,
          "price": 706000000,
          "roiHours": 8298.365011
        },
        {
          "level": 25,
          "coinsPerHour": 85159,
          "price": 918000000,
          "roiHours": 10779.83537
        },
        {
          "level": 26,
          "coinsPerHour": 85264,
          "price": 1193000000,
          "roiHours": 13991.83712
        },
        {
          "level": 27,
          "coinsPerHour": 85398,
          "price": 1551000000,
          "roiHours": 18162.01785
        },
        {
          "level": 28,
          "coinsPerHour": 85570,
          "price": 2017000000,
          "roiHours": 23571.3451
        },
        {
          "level": 29,
          "coinsPerHour": 85789,
          "price": 2622000000,
          "roiHours": 30563.35894
        },
        {
          "level": 30,
          "coinsPerHour": 86071,
          "price": 3409000000,
          "roiHours": 39606.83622
        },
        {
          "level": 31,
          "coinsPerHour": 86431,
          "price": 4431000000,
          "roiHours": 51266.32805
        },
        {
          "level": 32,
          "coinsPerHour": 86891,
          "price": 5760000000,
          "roiHours": 66289.94948
        },
        {
          "level": 33,
          "coinsPerHour": 87481,
          "price": 7489000000,
          "roiHours": 85607.16041
        },
        {
          "level": 34,
          "coinsPerHour": 88236,
          "price": 9735000000,
          "roiHours": 110329.1174
        },
        {
          "level": 35,
          "coinsPerHour": 89202,
          "price": 12656000000,
          "roiHours": 141880.2269
        },
        {
          "level": 36,
          "coinsPerHour": 90439,
          "price": 16452000000,
          "roiHours": 181912.6704
        },
        {
          "level": 37,
          "coinsPerHour": 92022,
          "price": 21388000000,
          "roiHours": 232422.6815
        },
        {
          "level": 38,
          "coinsPerHour": 94048,
          "price": 27804000000,
          "roiHours": 295636.2708
        },
        {
          "level": 39,
          "coinsPerHour": 96642,
          "price": 36146000000,
          "roiHours": 374019.5774
        },
        {
          "level": 40,
          "coinsPerHour": 99962,
          "price": 46989000000,
          "roiHours": 470068.6261
        }
      ]
    },
    
  ]);
  const [unclesBlessing, setUnclesBlessing] = useState({
    "id": 19,
    "name": "Uncle's Blessing",
    "image": uncleBlessing,
    "currentLevel": 0,
    "value": 0,
    "levels": [
      {
        "level": 1,
        "coinsPerHour": "Lvl 1",
        "value": 0.002,
        "price": 50000
      },
      {
        "level": 2,
        "coinsPerHour": "Lvl 2",
        "value": 0.003,
        "price": 55000
      },
      {
        "level": 3,
        "coinsPerHour": "Lvl 3",
        "value": 0.004,
        "price": 60500
      },
      {
        "level": 4,
        "coinsPerHour": "Lvl 4",
        "value": 0.005,
        "price": 66550
      },
      {
        "level": 5,
        "coinsPerHour": "Lvl 5",
        "value": 0.01,
        "price": 73205
      },
      {
        "level": 6,
        "coinsPerHour": "Lvl 6",
        "value": 0.011,
        "price": 80526
      },
      {
        "level": 7,
        "coinsPerHour": "Lvl 7",
        "value": 0.012,
        "price": 88578
      },
      {
        "level": 8,
        "coinsPerHour": "Lvl 8",
        "value": 0.013,
        "price": 97436
      },
      {
        "level": 9,
        "coinsPerHour": "Lvl 9",
        "value": 0.014,
        "price": 107179
      },
      {
        "level": 10,
        "coinsPerHour": "Lvl 10",
        "value": 0.02,
        "price": 117897
      },
      {
        "level": 11,
        "coinsPerHour": "Lvl 11",
        "value": 0.024,
        "price": 129687
      },
      {
        "level": 12,
        "coinsPerHour": "Lvl 12",
        "value": 0.028,
        "price": 142656
      },
      {
        "level": 13,
        "coinsPerHour": "Lvl 13",
        "value": 0.032,
        "price": 156921
      },
      {
        "level": 14,
        "coinsPerHour": "Lvl 14",
        "value": 0.036,
        "price": 172614
      },
      {
        "level": 15,
        "coinsPerHour": "Lvl 15",
        "value": 0.04,
        "price": 189875
      },
      {
        "level": 16,
        "coinsPerHour": "Lvl 16",
        "value": 0.044,
        "price": 208862
      },
      {
        "level": 17,
        "coinsPerHour": "Lvl 17",
        "value": 0.048,
        "price": 229749
      },
      {
        "level": 18,
        "coinsPerHour": "Lvl 18",
        "value": 0.052,
        "price": 252724
      },
      {
        "level": 19,
        "coinsPerHour": "Lvl 19",
        "value": 0.056,
        "price": 277996
      },
      {
        "level": 20,
        "coinsPerHour": "Lvl 20",
        "value": 0.06,
        "price": 305795
      },
      {
        "level": 21,
        "coinsPerHour": "Lvl 21",
        "value": 0.064,
        "price": 336375
      },
      {
        "level": 22,
        "coinsPerHour": "Lvl 22",
        "value": 0.068,
        "price": 370012
      },
      {
        "level": 23,
        "coinsPerHour": "Lvl 23",
        "value": 0.072,
        "price": 407014
      },
      {
        "level": 24,
        "coinsPerHour": "Lvl 24",
        "value": 0.076,
        "price": 447715
      },
      {
        "level": 25,
        "coinsPerHour": "Lvl 25",
        "value": 0.08,
        "price": 492487
      },
      {
        "level": 26,
        "coinsPerHour": "Lvl 26",
        "value": 0.084,
        "price": 542000
      },
      {
        "level": 27,
        "coinsPerHour": "Lvl 27",
        "value": 0.088,
        "price": 596000
      },
      {
        "level": 28,
        "coinsPerHour": "Lvl 28",
        "value": 0.092,
        "price": 656000
      },
      {
        "level": 29,
        "coinsPerHour": "Lvl 29",
        "value": 0.096,
        "price": 721000
      },
      {
        "level": 30,
        "coinsPerHour": "Lvl 30",
        "value": 0.1,
        "price": 793000
      },
      {
        "level": 31,
        "coinsPerHour": "Lvl 31",
        "value": 0.105,
        "price": 872000
      },
      {
        "level": 32,
        "coinsPerHour": "Lvl 32",
        "value": 0.11,
        "price": 960000
      },
      {
        "level": 33,
        "coinsPerHour": "Lvl 33",
        "value": 0.115,
        "price": 1056000
      },
      {
        "level": 34,
        "coinsPerHour": "Lvl 34",
        "value": 0.12,
        "price": 1161000
      },
      {
        "level": 35,
        "coinsPerHour": "Lvl 35",
        "value": 0.13,
        "price": 1277000
      },
      {
        "level": 36,
        "coinsPerHour": "Lvl 36",
        "value": 0.135,
        "price": 1405000
      },
      {
        "level": 37,
        "coinsPerHour": "Lvl 37",
        "value": 0.14,
        "price": 1546000
      },
      {
        "level": 38,
        "coinsPerHour": "Lvl 38",
        "value": 0.145,
        "price": 1700000
      },
      {
        "level": 39,
        "coinsPerHour": "Lvl 39",
        "value": 0.15,
        "price": 1870000
      },
      {
        "level": 40,
        "coinsPerHour": "Lvl 40",
        "value": 0.16,
        "price": 2057000
      },
      {
        "level": 41,
        "coinsPerHour": "Lvl 41",
        "value": 0.165,
        "price": 2263000
      },
      {
        "level": 42,
        "coinsPerHour": "Lvl 42",
        "value": 0.17,
        "price": 2489000
      },
      {
        "level": 43,
        "coinsPerHour": "Lvl 43",
        "value": 0.18,
        "price": 2738000
      },
      {
        "level": 44,
        "coinsPerHour": "Lvl 44",
        "value": 0.19,
        "price": 3012000
      },
      {
        "level": 45,
        "coinsPerHour": "Lvl 45",
        "value": 0.2,
        "price": 3313000
      },
      {
        "level": 46,
        "coinsPerHour": "Lvl 46",
        "value": 0.21,
        "price": 3645000
      },
      {
        "level": 47,
        "coinsPerHour": "Lvl 47",
        "value": 0.22,
        "price": 4009000
      },
      {
        "level": 48,
        "coinsPerHour": "Lvl 48",
        "value": 0.23,
        "price": 4410000
      },
      {
        "level": 49,
        "coinsPerHour": "Lvl 49",
        "value": 0.24,
        "price": 4851000
      },
      {
        "level": 50,
        "coinsPerHour": "Lvl 50",
        "value": 0.25,
        "price": 5336000
      }
    ]
  });

  // Cargar rows desde localStorage si existen, sino usar por defecto

  useEffect(() => {
    const savedRows = localStorage.getItem('rollertap_rows');
    if (savedRows) {
      setRows(JSON.parse(savedRows));
    }
  }, []);

  const handleLevelChange = (idx: number, value: number) => {
    setRows(prevRows => {
      const newRows = prevRows.map((row, i) =>
        i === idx
          ? {
              ...row,
              currentLevel: value,
              coinsPerHour: row.levels
                .slice(0, value)
                .reduce((sum, lvl) => sum + lvl.coinsPerHour, 0)
            }
          : row
      );
      localStorage.setItem('rollertap_rows', JSON.stringify(newRows));
      return newRows;
    });
  };

  useEffect(() => {
    const savedBlessing = localStorage.getItem('rollertap_unclesBlessing');
    if (savedBlessing) {
      setUnclesBlessing(JSON.parse(savedBlessing));
    }
  }, []);

  const handleUnclesBlessingLevelChange = (value: number) => {
    setUnclesBlessing(prev => {
      const newLevel = value;
      const updated = {
        ...prev,
        currentLevel: newLevel,
        value: newLevel > 0 ? prev.levels[newLevel - 1].value : 0
      };
      localStorage.setItem('rollertap_unclesBlessing', JSON.stringify(updated));
      return updated;
    });
  }

  const getNextLevelColor = (row: any) => {
    let color = getRoiColor(row.levels[row.currentLevel].roiHours);
    return color
  }

  // Interpolación entre dos colores
  function lerpColorHex(hex1: string, hex2: string, t: number) {
    const c1 = [
      parseInt(hex1.slice(1, 3), 16),
      parseInt(hex1.slice(3, 5), 16),
      parseInt(hex1.slice(5, 7), 16)
    ];
    const c2 = [
      parseInt(hex2.slice(1, 3), 16),
      parseInt(hex2.slice(3, 5), 16),
      parseInt(hex2.slice(5, 7), 16)
    ];
    const lerped = c1.map((v, i) => Math.round(v + (c2[i] - v) * t));
    return `#${lerped.map(c => c.toString(16).padStart(2, '0')).join('')}`;
  }

  // ROI color: verde (#247e2d) → rojo (#5b2c6f) → morado (#3a184e)
  function getRoiColor(roi: number, minRoi = 0, redRoi = 8000, maxRoi = 80000) {
    if (roi <= minRoi) return '#247e2d'; // verde
    if (roi >= maxRoi) return '#3a184e'; // morado
    if (roi <= redRoi) {
      // verde a rojo
      const t = (roi - minRoi) / (redRoi - minRoi);
      return lerpColorHex('#247e2d', '#c62929ff', t);
    } else {
      // rojo a morado
      const t = (roi - redRoi) / (maxRoi - redRoi);
      return lerpColorHex('#c62929ff', '#3a184e', t);
    }
  }

  function handleCoins(value: number) {
    if (value === null || value === undefined) return '0';
    const format = (num: number, suffix: string) =>
      num.toFixed(3).replace(/\.?0+$/, '') + suffix;
    if (value >= 1e12) return format(value / 1e12, 't');
    if (value >= 1e9) return format(value / 1e9, 'b');
    if (value >= 1e6) return format(value / 1e6, 'm');
    if (value >= 1e3) return format(value / 1e3, 'k');
    return value.toFixed(3).replace(/\.?0+$/, '');
  }

  function handleHours(value: number) {
    if (value === null || value === undefined) return '0h';
    return `${value.toFixed(2).replace(/\.?0+$/, '')}h`;
  }

  function getTotalIncome() {
    return handleCoins(rows.reduce((sum, lvl) => sum + lvl.coinsPerHour, 0) * (1 + unclesBlessing.value));
  }


  // function transformHamstersData(rawData: any) {
  //   // Convierte el objeto en entries [ [key, value], ... ]
  //   const entries = Object.entries(rawData);

  //   const result = [];

  //   // Recorremos de 4 en 4
  //   for (let i = 0; i < entries.length; i += 4) {
  //     const coinsBlock: any = entries[i][1];
  //     const priceBlock: any = entries[i + 1][1];
  //     const roiBlock: any = entries[i + 2][1];
  //     // el cuarto bloque se ignora

  //     // Nombre del hamster
  //     const hamsterName =
  //       coinsBlock['Unnamed: 1'] || `Hamster ${i / 4 + 1}`;

  //     // Crear levels a partir de las keys tipo "Lvl X"
  //     const levels = Object.keys(coinsBlock)
  //       .filter(k => k.startsWith('Lvl'))
  //       .map(k => ({
  //         level: parseInt(k.split(' ')[1]),
  //         coinsPerHour: coinsBlock[k],
  //         price: priceBlock[k],
  //         roiHours: roiBlock[k]
  //       }))
  //       .filter(l => !!l.level && !!l.coinsPerHour); // Filtrar niveles inválidos

  //     if (['Hamster 20', 'Hamster 22', 'Hamster 23', "Healthy sleep"].includes(hamsterName) || hamsterName == 81) {
  //       continue; // Saltar hamsters específicos
  //     }
  //     result.push({
  //       id: i / 4 + 1,
  //       name: hamsterName,
  //       image: `/rollertap/${i / 4 + 1}.png`,
  //       currentLevel: 0,
  //       coinsPerHour: 0,
  //       levels
  //     });
  //   }

  //   return result;
  // }


  return (
    <div className="rollertap-container">
      <div className='help'>
        {t?.rollertap?.help}
        <br />
        <b>{t?.rollertap?.createAccount} <a href="https://t.me/rollertap_bot?start=7266343545" target="_blank" rel="noopener noreferrer">{t?.rollertap?.here}</a></b>
        </div>
      <div className="resume">
        <div className="resume-profit">
          <span> {t?.rollertap?.coinsPerHour}  
            <span className="coin"> 🪙{getTotalIncome()}</span>
          </span>
        </div>
      </div>
      <div className="card-container">
      {rows.map((row, idx) => (
        <div key={idx} className="card">
          <img src={row.image} alt={row.name} className="card-image" />
          <div className="card-title">{row.name}</div>
          <div className="card-level">
            <div
              className="level-btn level-down"
              aria-label="Bajar nivel"
              onClick={() => {
                const prevLevel = Math.max(0, row.currentLevel - 1);
                handleLevelChange(idx, prevLevel);
              }}
              style={{ cursor: 'pointer' }}
            >
              ▼
            </div>
            <input
              type="number"
              name='level'
              min={0}
              max={row.levels.length}
              value={row.currentLevel}
              className="level-input"
              onChange={e => handleLevelChange(idx, Math.max(0, Math.min(row.levels.length, Number(e.target.value))))}
              onFocus={e => e.target.select()}
            />
            <div
              className="level-btn level-up"
              aria-label="Subir nivel"
              onClick={() => {
                const nextLevel = Math.min(row.levels.length, row.currentLevel + 1);
                handleLevelChange(idx, nextLevel);
              }}
              style={{ cursor: 'pointer' }}
            >
              ▲
            </div>
          </div>
          <div className="card-profit">
            {t?.rollertap?.profitPerHour}: <span className="coin">🪙{handleCoins(row.coinsPerHour)}</span>
          </div>
          {row.currentLevel === row.levels.length ? (
            <div className="last-level-message">{t?.rollertap?.lastLevelMessage}</div>
          ) : (
            <div className="next-level" style={{ backgroundColor: getNextLevelColor(row) }}>
              <div className="level-title">{t?.rollertap?.nextLevel}</div>
              <div className="coin">+🪙{handleCoins(row.levels[row.currentLevel].coinsPerHour)}</div>
              <div className="cost">{t?.rollertap?.cost}: 🪙{handleCoins(row.levels[row.currentLevel].price)}</div>
              <div className="roi">{t?.rollertap?.roiInHours}: {handleHours(row.levels[row.currentLevel].roiHours)}</div>
            </div>
          )}
        </div>
      ))}
      </div>
      <div className='card-container' style={{borderTop: '2px solid var(--secondary)', marginTop: '20px', paddingTop: '20px', marginBottom: '40px'}}>
        <div className="card">
          <img src={unclesBlessing.image} alt={unclesBlessing.name} className="card-image" />
          <div className="card-title">{unclesBlessing.name}</div>
          <div className="card-level">
            <div
              className="level-btn level-down"
              aria-label="Bajar nivel"
              onClick={() => {
                const prevLevel = Math.max(0, unclesBlessing.currentLevel - 1);
                handleUnclesBlessingLevelChange(prevLevel);
              }}
              style={{ cursor: 'pointer' }}
            >
              ▼
            </div>
            <input
              type="number"
              name='level'
              min={0}
              max={unclesBlessing.levels.length}
              value={unclesBlessing.currentLevel}
              className="level-input"
              onChange={e => handleUnclesBlessingLevelChange(Math.max(0, Math.min(unclesBlessing.levels.length, Number(e.target.value))))}
              onFocus={e => e.target.select()}
            />
            <div
              className="level-btn level-up"
              aria-label="Subir nivel"
              onClick={() => {
                const nextLevel = Math.min(unclesBlessing.levels.length, unclesBlessing.currentLevel + 1);
                handleUnclesBlessingLevelChange(nextLevel);
              }}
              style={{ cursor: 'pointer' }}
            >
              ▲
            </div>
          </div>
          <div className="card-profit">
            {t?.rollertap?.extraIncome}: <span className="coin">{handleCoins(unclesBlessing.value * 100)}%</span>
          </div>
          {unclesBlessing.currentLevel === unclesBlessing.levels.length ? (
            <div className="last-level-message">{t?.rollertap?.lastLevelMessage}</div>
          ) : (
              <div className="next-level" style={{ backgroundColor: "var(--secondary)" }}>
              <div className="level-title">{t?.rollertap?.nextLevel}</div>
              <div className="coin">+{handleCoins(unclesBlessing.levels[unclesBlessing.currentLevel].value * 100)}%</div>
              <div className="cost">{t?.rollertap?.cost}: 🪙{handleCoins(unclesBlessing.levels[unclesBlessing.currentLevel].price)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
