import type { ExcalidrawElementSkeleton } from "@excalidraw/excalidraw/data/transform";
import type { FileId } from "@excalidraw/excalidraw/element/types";

const elements: ExcalidrawElementSkeleton[] = [
  {
    type: "rectangle",
    x: 10,
    y: 10,
    strokeWidth: 2,
    id: "1",
  },
  {
    type: "diamond",
    x: 120,
    y: 20,
    backgroundColor: "#fff3bf",
    strokeWidth: 2,
    label: {
      text: "HELLO EXCALIDRAW",
      strokeColor: "#099268",
      fontSize: 30,
    },
    id: "2",
  },
  {
    type: "arrow",
    x: 100,
    y: 200,
    label: { text: "HELLO WORLD!!" },
    start: { type: "rectangle" },
    end: { type: "ellipse" },
  },
  {
    type: "image",
    x: 606.1042326312408,
    y: 153.57729779411773,
    width: 230,
    height: 230,
    fileId: "rocket" as FileId,
  },
  {
    type: "frame",
    children: ["1", "2"],
    name: "My frame",
  },
];
export default {
  elements,
  appState: { viewBackgroundColor: "#AFEEEE", currentItemFontFamily: 5 },
  scrollToContent: true,
  libraryItems: [
    [
      {
        type: "line",

        x: 209.72304760646858,
        y: 338.83587294718825,
        strokeColor: "#881fa3",
        backgroundColor: "#be4bdb",
        width: 116.42036295658873,
        height: 103.65107323746608,
        strokeSharpness: "sharp",
        points: [
          [-92.28090097254909, 7.105427357601002e-15],
          [-154.72281841151394, 19.199290805487394],
          [-155.45758928571422, 79.43840749607878],
          [-99.89923520113778, 103.6510732374661],
          [-40.317783799181804, 79.1587107641305],
          [-39.037226329125524, 21.285677238400705],
          [-92.28090097254909, 7.105427357601002e-15],
        ],
      },
    ],
    [
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        x: -249.48446738689245,
        y: 374.851387389359,
        strokeColor: "#0a11d3",
        backgroundColor: "#228be6",
        width: 88.21658171083376,
        height: 113.8575037534261,
        groupIds: ["N2YAi9nU-wlRb0rDaDZoe"],
        points: [
          [-0.22814350714115691, -43.414939319563715],
          [0.06274947619197979, 42.63794490105306],
          [-0.21453039840335475, 52.43469208825097],
          [4.315205554872581, 56.66774540453215],
          [20.089784992984285, 60.25027917349701],
          [46.7532926683984, 61.365826671969444],
          [72.22851104292477, 59.584691681394986],
          [85.76368213524371, 55.325139565662596],
          [87.67263486434864, 51.7342924478499],
          [87.94074036468018, 43.84700272879395],
          [87.73030872197806, -36.195582644606276],
          [87.2559282533682, -43.758132174307036],
          [81.5915337527493, -47.984890854524416],
          [69.66352776578219, -50.4328058257654],
          [42.481213744224995, -52.49167708145666],
          [20.68789182864576, -51.26396751574663],
          [3.5475921483286084, -47.099726468136254],
          [-0.2758413461535838, -43.46664538034193],
          [-0.22814350714115691, -43.414939319563715],
        ],
      },
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -249.02524930453623,
        y: 398.8804363713438,
        strokeColor: "#0a11d3",
        backgroundColor: "transparent",
        width: 88.30808627974527,
        height: 9.797916664247975,
        seed: 683951089,
        groupIds: ["N2YAi9nU-wlRb0rDaDZoe"],
        strokeSharpness: "round",

        points: [
          [0, -2.1538602707609424],
          [2.326538897826852, 1.751753055375216],
          [12.359939318521995, 5.028526743934819],
          [25.710950037209347, 7.012921076245119],
          [46.6269757640547, 7.193749997581346],
          [71.03526003420632, 5.930375670950649],
          [85.2899738827162, 1.3342483900732343],
          [88.30808627974527, -2.6041666666666288],
        ],
      },
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -250.11899081659772,
        y: 365.80628180927204,
        strokeColor: "#0a11d3",
        backgroundColor: "transparent",
        width: 88.30808627974527,
        height: 9.797916664247975,
        seed: 1817746897,
        groupIds: ["N2YAi9nU-wlRb0rDaDZoe"],
        strokeSharpness: "round",

        points: [
          [0, -2.1538602707609424],
          [2.326538897826852, 1.751753055375216],
          [12.359939318521995, 5.028526743934819],
          [25.710950037209347, 7.012921076245119],
          [46.6269757640547, 7.193749997581346],
          [71.03526003420632, 5.930375670950649],
          [85.2899738827162, 1.3342483900732343],
          [88.30808627974527, -2.6041666666666288],
        ],
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -251.23981350275943,
        y: 323.4117518426986,
        strokeColor: "#0a11d3",
        backgroundColor: "#fff",
        width: 87.65074610854188,
        height: 17.72670397681366,
        seed: 1409727409,
        groupIds: ["N2YAi9nU-wlRb0rDaDZoe"],
        strokeSharpness: "sharp",
        boundElementIds: ["bxuMGTzXLn7H-uBCptINx"],
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -179.73008120217884,
        y: 347.98755471983213,
        strokeColor: "#0a11d3",
        backgroundColor: "#fff",
        width: 12.846057046979809,
        height: 13.941904362416096,
        seed: 1073094033,
        groupIds: ["N2YAi9nU-wlRb0rDaDZoe"],
        strokeSharpness: "sharp",
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -179.73008120217884,
        y: 378.5900085788926,
        strokeColor: "#0a11d3",
        backgroundColor: "#fff",
        width: 12.846057046979809,
        height: 13.941904362416096,
        seed: 526271345,
        groupIds: ["N2YAi9nU-wlRb0rDaDZoe"],
        strokeSharpness: "sharp",
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -179.73008120217884,
        y: 411.8508097533892,
        strokeColor: "#0a11d3",
        backgroundColor: "#fff",
        width: 12.846057046979809,
        height: 13.941904362416096,
        seed: 243707217,
        groupIds: ["N2YAi9nU-wlRb0rDaDZoe"],
        strokeSharpness: "sharp",
      },
    ],
    [
      {
        type: "diamond",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 381.22641397493356,
        strokeColor: "#c92a2a",
        backgroundColor: "#fd8888",
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 511870335,
        groupIds: ["M6ByXuSmtHCr3RtPPKJQh"],
        strokeSharpness: "sharp",
      },
      {
        type: "diamond",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 372.354634046675,
        strokeColor: "#c92a2a",
        backgroundColor: "#fd8888",
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 1283079231,
        groupIds: ["M6ByXuSmtHCr3RtPPKJQh"],
        strokeSharpness: "sharp",
      },
      {
        type: "diamond",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 359.72407445196296,
        strokeColor: "#c92a2a",
        backgroundColor: "#fd8888",
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 996251633,
        groupIds: ["M6ByXuSmtHCr3RtPPKJQh"],
        strokeSharpness: "sharp",
      },
      {
        type: "diamond",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 347.1924021546656,
        strokeColor: "#c92a2a",
        backgroundColor: "#fd8888",
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 1764842481,
        groupIds: ["M6ByXuSmtHCr3RtPPKJQh"],
        strokeSharpness: "sharp",
      },
    ],
    [
      {
        type: "line",
        fillStyle: "hachure",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -471.6208001976387,
        y: 520.7681448415112,
        strokeColor: "#087f5b",
        backgroundColor: "#40c057",
        width: 52.317507746132115,
        height: 154.56722543646003,
        seed: 1424381745,
        groupIds: ["HSrtfEf-CssQTf160Fb6R"],
        strokeSharpness: "round",

        points: [
          [-0.24755378372925183, -40.169554027464216],
          [-0.07503751055611152, 76.6515171914404],
          [-0.23948042713317108, 89.95108885873196],
          [2.446913573036335, 95.69766931810295],
          [11.802146636255692, 100.56113713047068],
          [27.615140546177496, 102.07554835500338],
          [42.72341054254274, 99.65756899883291],
          [50.75054563137204, 93.87501510096598],
          [51.88266441510958, 89.00026150397161],
          [52.04166639997853, 78.29287333983132],
          [51.916868330459295, -30.36891819848148],
          [51.635533423123285, -40.63545540065934],
          [48.27622163143906, -46.37349057843314],
          [41.202227904674494, -49.69665692879073],
          [25.081551986374073, -52.49167708145666],
          [12.15685839679867, -50.825000270901],
          [1.9916746648394732, -45.171835889467935],
          [-0.2758413461535838, -40.23974757720194],
          [-0.24755378372925183, -40.169554027464216],
        ],
      },
      {
        type: "line",
        version: 2405,
        versionNonce: 2120341087,
        isDeleted: false,
        id: "TYsYe2VvJ60T_yKa3kyOw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -496.3957643857249,
        y: 541.7241190920508,
        strokeColor: "#087f5b",
        backgroundColor: "transparent",
        width: 50.7174766392476,
        height: 12.698053371678215,
        seed: 726657713,
        groupIds: ["HSrtfEf-CssQTf160Fb6R"],
        strokeSharpness: "round",

        points: [
          [0, -2.0205717204386002],
          [1.3361877396713384, 3.0410845646550486],
          [7.098613049589299, 7.287767671898479],
          [14.766422451441104, 9.859533283467512],
          [26.779003528407447, 10.093886705011586],
          [40.79727342221974, 8.456559589697127],
          [48.98410145879092, 2.500000505196364],
          [50.7174766392476, -2.6041666666666288],
        ],
      },
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -450.969983237283,
        y: 542.1789894334747,
        strokeColor: "#087f5b",
        backgroundColor: "transparent",
        width: 50.57247907260371,
        height: 10.178760037658167,
        seed: 1977326481,
        groupIds: ["HSrtfEf-CssQTf160Fb6R"],
        strokeSharpness: "round",

        points: [
          [0, -2.136356936862347],
          [1.332367676378171, 1.9210669226078037],
          [7.078318632616268, 5.325208253515953],
          [14.724206326638113, 7.386735659885842],
          [26.70244431044034, 7.574593370991538],
          [40.68063699304561, 6.262111896696538],
          [48.84405948536458, 1.4873339211608216],
          [50.57247907260371, -2.6041666666666288],
        ],
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -404.36521010516793,
        y: 534.1894365757241,
        strokeColor: "#087f5b",
        backgroundColor: "#fff",
        width: 51.27812853552538,
        height: 22.797152568995934,
        seed: 1774660383,
        groupIds: ["HSrtfEf-CssQTf160Fb6R"],
        strokeSharpness: "sharp",
        boundElementIds: ["bxuMGTzXLn7H-uBCptINx"],
      },
    ],
    [
      {
        type: "rectangle",
        fillStyle: "solid",
        strokeWidth: 2,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -393.3000561423187,
        y: 338.9742643666818,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 70.67858069123133,
        height: 107.25081879410921,
        seed: 371096063,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "sharp",
        boundElementIds: [
          "CFu0B4Mw_1wC1Hbgx8Fs0",
          "XIl_NhaFtRO00pX5Pq6VU",
          "EndiSTFlx1AT7vcBVjgve",
        ],
      },
      {
        type: "rectangle",
        fillStyle: "solid",
        strokeWidth: 2,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -400.8474891780329,
        y: 331.95417508096745,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 70.67858069123133,
        height: 107.25081879410921,
        seed: 685932433,
        groupIds: ["0RJwA-yKP5dqk5oMiSeot", "9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "sharp",
        boundElementIds: [
          "CFu0B4Mw_1wC1Hbgx8Fs0",
          "XIl_NhaFtRO00pX5Pq6VU",
          "EndiSTFlx1AT7vcBVjgve",
        ],
      },
      {
        type: "rectangle",
        fillStyle: "solid",
        strokeWidth: 2,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -410.24257846374826,
        y: 323.7002688309677,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 70.67858069123133,
        height: 107.25081879410921,
        seed: 58634943,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "sharp",
        boundElementIds: [
          "CFu0B4Mw_1wC1Hbgx8Fs0",
          "XIl_NhaFtRO00pX5Pq6VU",
          "EndiSTFlx1AT7vcBVjgve",
        ],
      },
      {
        type: "draw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -398.2561518768373,
        y: 371.84603609547054,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 46.57983585730082,
        height: 3.249953844290203,
        seed: 1673003743,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "round",

        points: [
          [0, 0.6014697828497827],
          [40.42449133807562, 0.7588628355182573],
          [46.57983585730082, -2.491091008771946],
        ],
      },
      {
        type: "draw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -396.400899638823,
        y: 340.9822185794818,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 45.567415680676426,
        height: 2.8032978840147194,
        seed: 1821527807,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [16.832548902953302, -2.8032978840147194],
          [45.567415680676426, -0.3275477042019195],
        ],
      },
      {
        type: "draw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -396.4774991551924,
        y: 408.37659284983897,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 48.33668263438425,
        height: 4.280657518731036,
        seed: 1485707039,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [26.41225578429045, -0.2552319773002338],
          [37.62000339651456, 2.3153712935189787],
          [48.33668263438425, -1.9652862252120569],
        ],
      },
      {
        type: "draw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -399.6615463367227,
        y: 419.61974125811776,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 54.40694982784246,
        height: 2.9096445412231735,
        seed: 1042012991,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [10.166093050596771, -1.166642430373031],
          [16.130660965377448, -0.8422655250909383],
          [46.26079588567538, 0.6125567455206506],
          [54.40694982784246, -2.297087795702523],
        ],
      },
      {
        type: "draw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -399.3767034411569,
        y: 356.042820132743,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 46.92865289294453,
        height: 2.4757501798128,
        seed: 295443295,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [18.193786115221407, -0.5912874140789839],
          [46.92865289294453, 1.884462765733816],
        ],
      },
      {
        type: "draw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -399.26921524500654,
        y: 390.5261491685826,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 46.92865289294453,
        height: 2.4757501798128,
        seed: 1734301567,
        groupIds: ["9ppmKFUbA4iKjt8FaDFox"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [8.093938105125233, 1.4279702913643746],
          [18.193786115221407, -0.5912874140789839],
          [46.92865289294453, 1.884462765733816],
        ],
      },
    ],
    [
      {
        type: "rectangle",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -593.9896997899341,
        y: 343.9798351106279,
        strokeColor: "#000000",
        backgroundColor: "transparent",
        width: 127.88383573213892,
        height: 76.53703389977764,
        seed: 106569279,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "sharp",
      },
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -595.0652975408293,
        y: 354.6963695028721,
        strokeColor: "#000000",
        backgroundColor: "transparent",
        width: 128.84193229844433,
        height: 0,
        seed: 73916127,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [128.84193229844433, 0],
        ],
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 0,
        opacity: 100,
        angle: 0,
        x: -589.5016643209792,
        y: 348.2514049106367,
        strokeColor: "#000000",
        backgroundColor: "#fa5252",
        width: 5.001953125,
        height: 5.001953125,
        seed: 387857791,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "sharp",
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 0,
        opacity: 100,
        angle: 0,
        x: -579.2389690084792,
        y: 348.2514049106367,
        strokeColor: "#000000",
        backgroundColor: "#fab005",
        width: 5.001953125,
        height: 5.001953125,
        seed: 1486370207,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "sharp",
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 0,
        opacity: 100,
        angle: 0,
        x: -568.525552542133,
        y: 348.7021260644829,
        strokeColor: "#000000",
        backgroundColor: "#40c057",
        width: 5.001953125,
        height: 5.001953125,
        seed: 610150847,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "sharp",
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 90,
        angle: 0,
        x: -552.4984915525058,
        y: 364.75449494249875,
        strokeColor: "#000000",
        backgroundColor: "#04aaf7",
        width: 42.72020253937572,
        height: 42.72020253937572,
        seed: 144280593,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "sharp",
      },
      {
        type: "draw",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        x: -530.327851842306,
        y: 378.9357912947449,
        strokeColor: "#087f5b",
        backgroundColor: "#40c057",
        width: 28.226201983883442,
        height: 24.44112284281997,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "round",
        points: [
          [4.907524351775825, 2.043055712211473],
          [3.0769604829149455, 1.6284171290602836],
          [-2.66472604008681, -4.228569719133945],
          [-6.450168189798415, -2.304577297733668],
          [-7.704241049212052, 4.416384506147983],
          [-6.361372181234263, 8.783101300254884],
          [-12.516984713388897, 10.9291595737194],
          [-12.295677738198286, 15.686226498407976],
          [-7.473371426945252, 15.393030178104425],
          [-3.787654025313423, 11.5207568827343],
          [1.2873793872375165, 19.910682356036197],
          [4.492232250183542, 20.212553123686025],
          [1.1302787567009416, 6.843494873631317],
          [6.294108177816019, 6.390688722156585],
          [8.070028349098962, 7.910451897221202],
          [14.143675334886687, 7.910451897221202],
          [15.709217270494545, 2.6780252579576427],
          [9.128749989671498, 3.1533849725326517],
          [10.393751588600717, -3.7167773257046695],
          [7.380151667177483, -3.30213874255348],
          [4.669824267311791, 1.1200945145694894],
          [4.907524351775825, 2.043055712211473],
        ],
      },
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 90,
        angle: 0,
        x: -551.4394290784783,
        y: 385.71736850567976,
        strokeColor: "#000000",
        backgroundColor: "#99bcff",
        width: 42.095115772272244,
        height: 0,
        seed: 1443027377,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [42.095115772272244, 0],
        ],
      },
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 0,
        opacity: 90,
        angle: 0,
        x: -546.3441000487039,
        y: 372.6245229061568,
        strokeColor: "#000000",
        backgroundColor: "#99bcff",
        width: 29.31860660384862,
        height: 5.711199931375845,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "round",
        points: [
          [0, -2.341683327443203],
          [0.7724193963150375, -0.06510358900749044],
          [4.103544916365185, 1.84492589414448],
          [8.536129150893453, 3.0016281808630056],
          [15.480325949120388, 3.1070332647092163],
          [23.583965316012858, 2.3706131055211244],
          [28.316582284417855, -0.3084668090492442],
          [29.31860660384862, -2.6041666666666288],
        ],
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 90,
        angle: 0,
        x: -538.2701841247845,
        y: 363.37196531290607,
        strokeColor: "#000000",
        backgroundColor: "transparent",
        width: 15.528434353116108,
        height: 44.82230388130942,
        seed: 683572113,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "sharp",
      },
      {
        type: "line",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        opacity: 90,
        x: -544.828148539078,
        y: 402.0199316371545,
        strokeColor: "#000000",
        backgroundColor: "#99bcff",
        width: 29.31860660384862,
        height: 5.896061363392446,
        seed: 318798801,
        groupIds: ["TC0RSM64Cxmu17MlE12-o"],
        strokeSharpness: "round",

        points: [
          [0, 0],
          [4.103544916365185, -4.322122351104391],
          [8.536129150893453, -5.516265043290966],
          [15.480325949120388, -5.625081903117008],
          [23.583965316012858, -4.8648251269605955],
          [28.316582284417855, -2.0990281379671547],
          [29.31860660384862, 0.2709794602754383],
        ],
      },
    ],
    [
      {
        type: "rectangle",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -715.1043446306466,
        y: 330.4231266309418,
        strokeColor: "#000000",
        backgroundColor: "#ced4da",
        width: 70.81644178885557,
        height: 108.30428902193904,
        seed: 1914896753,
        groupIds: ["GMZ-NW9lG7c1AtfBInZ0n"],
        strokeSharpness: "sharp",
      },
      {
        type: "rectangle",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -706.996640540555,
        y: 338.68030798133873,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 55.801163535143246,
        height: 82.83278895375764,
        seed: 1306468145,
        groupIds: ["GMZ-NW9lG7c1AtfBInZ0n"],
        strokeSharpness: "sharp",
      },
      {
        type: "ellipse",
        fillStyle: "solid",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -684.8099707762028,
        y: 425.0579911039235,
        strokeColor: "#000000",
        backgroundColor: "#fff",
        width: 11.427824006438863,
        height: 11.427824006438863,
        seed: 93422161,
        groupIds: ["GMZ-NW9lG7c1AtfBInZ0n"],
        strokeSharpness: "sharp",
      },
      {
        type: "rectangle",
        fillStyle: "cross-hatch",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -698.7169501405845,
        y: 349.2244646574789,
        strokeColor: "#000000",
        backgroundColor: "#fab005",
        width: 39.2417827352022,
        height: 19.889460471185775,
        seed: 11646495,
        groupIds: ["GMZ-NW9lG7c1AtfBInZ0n"],
        strokeSharpness: "sharp",
      },
      {
        type: "rectangle",
        fillStyle: "cross-hatch",
        strokeWidth: 1,
        strokeStyle: "solid",
        x: -698.7169501405845,
        y: 384.7822247024333,
        strokeColor: "#000000",
        backgroundColor: "#fab005",
        width: 39.2417827352022,
        height: 19.889460471185775,
        seed: 291717649,
        groupIds: ["GMZ-NW9lG7c1AtfBInZ0n"],
        strokeSharpness: "sharp",
      },
    ],
    [
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 3035,
            "versionNonce": 1280493655,
            "isDeleted": false,
            "id": "GUq90cfPCBI5_XleHcVf4",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1809.1495216187216,
            "y": 1477.109035697224,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 64.46115236495699,
            "height": 64.39942473426015,
            "seed": 886726492,
            "groupIds": [
              "6yKeiHwTZ9f1hENg1Rvln",
              "T3ua4nOmCVl7yrAf5BCce",
              "TCfHzaLQwx50O5BjXwJ-k",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "type": "arrow",
                "id": "EUHZ_sUolb_30DI6OzWP4"
              },
              {
                "type": "arrow",
                "id": "HjpGCBxUuBW46Wd5r_3cI"
              },
              {
                "type": "arrow",
                "id": "qVpgRhAMH6njKSxkEUaob"
              },
              {
                "type": "arrow",
                "id": "fXUqR5l9-mJxPJpngO-uK"
              },
              {
                "type": "arrow",
                "id": "GST0HrCYDviCg-JDHslU7"
              },
              {
                "type": "arrow",
                "id": "WwJfE-IGw-hz6uAt8MWQ6"
              },
              {
                "type": "arrow",
                "id": "_xS_u95gyqYLnjH6Z_ekf"
              }
            ],
            "updated": 1652788086502,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 2667,
            "versionNonce": 1834863769,
            "isDeleted": false,
            "id": "RyexOyb07MMvy6EvnZWEe",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1829.0292782163615,
            "y": 1525.8995920327388,
            "strokeColor": "#e01e5a",
            "backgroundColor": "#e01e5a",
            "width": 9.812617686394493,
            "height": 21.62230587269945,
            "seed": 1677907044,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                1.5493619039573798,
                7.856944476158105
              ],
              [
                9.210070077961463,
                7.039820663903555
              ],
              [
                9.812617686394493,
                -13.576796391808415
              ],
              [
                0.7746982889836341,
                -13.765361396541337
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 3068,
            "versionNonce": 2040898935,
            "isDeleted": false,
            "id": "LqIPxdOsv3S99kOaoHOiG",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1817.9597283311568,
            "y": 1510.4826671595124,
            "strokeColor": "#e01e5a",
            "backgroundColor": "#e01e5a",
            "width": 10.809935258890052,
            "height": 10.400984872948921,
            "seed": 1905136604,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -2.818991814833378,
                2.324732734179281
              ],
              [
                -3.8436806131559678,
                6.762634497124866
              ],
              [
                1.1650667382148967,
                10.071035010913667
              ],
              [
                6.770132861029776,
                7.667134320273243
              ],
              [
                6.946438793826424,
                -0.3210484014135393
              ],
              [
                6.966254645734084,
                -0.329949862035255
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 2765,
            "versionNonce": 420139385,
            "isDeleted": false,
            "id": "F6mCSafAu5tWLjM5CYatC",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 1.5707963267948957,
            "x": 1823.1083833032508,
            "y": 1505.83322408803,
            "strokeColor": "#36c5f0",
            "backgroundColor": "#36c5f0",
            "width": 9.812617686394493,
            "height": 21.62230587269945,
            "seed": 1156753380,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                1.5493619039573798,
                7.856944476158105
              ],
              [
                9.210070077961463,
                7.039820663903555
              ],
              [
                9.812617686394493,
                -13.576796391808415
              ],
              [
                0.7746982889836341,
                -13.765361396541337
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 3150,
            "versionNonce": 1860165271,
            "isDeleted": false,
            "id": "FDcmhAvzwShOEBdo_dw0l",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 1.5707963267948957,
            "x": 1832.77271399571,
            "y": 1483.2516879256468,
            "strokeColor": "#36c5f0",
            "backgroundColor": "#36c5f0",
            "width": 10.809935258890052,
            "height": 10.400984872948921,
            "seed": 920074332,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -2.818991814833378,
                2.324732734179281
              ],
              [
                -3.8436806131559678,
                6.762634497124866
              ],
              [
                1.1650667382148967,
                10.071035010913667
              ],
              [
                6.770132861029776,
                7.667134320273243
              ],
              [
                6.946438793826424,
                -0.3210484014135393
              ],
              [
                6.966254645734084,
                -0.329949862035255
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 2750,
            "versionNonce": 1451506265,
            "isDeleted": false,
            "id": "nYFs-74rOPAlZ2nOvE97v",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 3.141592653589793,
            "x": 1842.661901614898,
            "y": 1498.7158578723952,
            "strokeColor": "#2eb67d",
            "backgroundColor": "#2eb67d",
            "width": 9.812617686394493,
            "height": 21.62230587269945,
            "seed": 798755684,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                1.5493619039573798,
                7.856944476158105
              ],
              [
                9.210070077961463,
                7.039820663903555
              ],
              [
                9.812617686394493,
                -13.576796391808415
              ],
              [
                0.7746982889836341,
                -13.765361396541337
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 3134,
            "versionNonce": 1857418167,
            "isDeleted": false,
            "id": "WmaJXyLyLpOOjJhw-UoJj",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 3.141592653589793,
            "x": 1861.4724630741243,
            "y": 1496.5456409197295,
            "strokeColor": "#2eb67d",
            "backgroundColor": "#2eb67d",
            "width": 10.809935258890052,
            "height": 10.400984872948921,
            "seed": 814206172,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -2.818991814833378,
                2.324732734179281
              ],
              [
                -3.8436806131559678,
                6.762634497124866
              ],
              [
                1.1650667382148967,
                10.071035010913667
              ],
              [
                6.770132861029776,
                7.667134320273243
              ],
              [
                6.946438793826424,
                -0.3210484014135393
              ],
              [
                6.966254645734084,
                -0.329949862035255
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 2819,
            "versionNonce": 1990035257,
            "isDeleted": false,
            "id": "vkY1-p93k12hl8wGSNqf9",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 4.712388980384688,
            "x": 1849.4061798638486,
            "y": 1519.6810119128954,
            "strokeColor": "#ecb22e",
            "backgroundColor": "#ecb22e",
            "width": 9.812617686394493,
            "height": 21.62230587269945,
            "seed": 1447886564,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                1.5493619039573798,
                7.856944476158105
              ],
              [
                9.210070077961463,
                7.039820663903555
              ],
              [
                9.812617686394493,
                -13.576796391808415
              ],
              [
                0.7746982889836341,
                -13.765361396541337
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 3219,
            "versionNonce": 1900831959,
            "isDeleted": false,
            "id": "KSOt5gdgvmOrCDQ87AB18",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 4.712388980384688,
            "x": 1845.5079975038857,
            "y": 1525.079826667898,
            "strokeColor": "#ecb22e",
            "backgroundColor": "#ecb22e",
            "width": 10.809935258890052,
            "height": 10.400984872948921,
            "seed": 1077006684,
            "groupIds": [
              "HCz7wqtztIfOhP5y_Go4g",
              "O-QUX1l0MwWQlYY-pidnL",
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -2.818991814833378,
                2.324732734179281
              ],
              [
                -3.8436806131559678,
                6.762634497124866
              ],
              [
                1.1650667382148967,
                10.071035010913667
              ],
              [
                6.770132861029776,
                7.667134320273243
              ],
              [
                6.946438793826424,
                -0.3210484014135393
              ],
              [
                6.966254645734084,
                -0.329949862035255
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "text",
            "version": 1858,
            "versionNonce": 1673148441,
            "isDeleted": false,
            "id": "w5bRazofab7lU3wH7aSK_",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 1815.3800978012005,
            "y": 1545.8807498280685,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 52,
            "height": 25,
            "seed": 1905492580,
            "groupIds": [
              "32xgjoIfrxequxeS1yiKx"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086502,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Slack",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Slack"
          }
        ],
        "id": "mb6aDt8lLpnjb9BXfkKzo",
        "created": 1652788300698,
        "name": "Slack"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 3159,
            "versionNonce": 1890483031,
            "isDeleted": false,
            "id": "uanIHxCIrMYntFa5JEEBR",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2000.8934435647661,
            "y": 1476.3079086177738,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 64.46115236495699,
            "height": 64.39942473426015,
            "seed": 323870300,
            "groupIds": [
              "ACroLnLjF7CL0w1OeLMWU",
              "nj3uI0loSvxxD4oKwuvTC",
              "4xoG6DV7mIB8Ajo2D1P48",
              "_aLjJPj6ubf6pav06ALqJ",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "type": "arrow",
                "id": "EUHZ_sUolb_30DI6OzWP4"
              },
              {
                "type": "arrow",
                "id": "HjpGCBxUuBW46Wd5r_3cI"
              },
              {
                "type": "arrow",
                "id": "qVpgRhAMH6njKSxkEUaob"
              },
              {
                "type": "arrow",
                "id": "fXUqR5l9-mJxPJpngO-uK"
              },
              {
                "type": "arrow",
                "id": "GST0HrCYDviCg-JDHslU7"
              },
              {
                "type": "arrow",
                "id": "WwJfE-IGw-hz6uAt8MWQ6"
              },
              {
                "type": "arrow",
                "id": "_xS_u95gyqYLnjH6Z_ekf"
              }
            ],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 2392,
            "versionNonce": 336251289,
            "isDeleted": false,
            "id": "7_toODjCSHDISkrm2shFd",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2016.0359076430884,
            "y": 1511.661855278454,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 56.62135476067269,
            "height": 27.781375401353056,
            "seed": 841461348,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                26.49928798736996,
                -0.5555399791810629
              ],
              [
                32.86897029257218,
                -1.351746926303818
              ],
              [
                31.54797965057393,
                -6.47281952059744
              ],
              [
                33.64708101980081,
                -11.340553540806383
              ],
              [
                36.88620050527203,
                -6.798543885447785
              ],
              [
                36.45191491873459,
                -3.1432192393850187
              ],
              [
                41.67251763363534,
                -6.7171136294920615
              ],
              [
                45.75309251293886,
                -5.2242237812582175
              ],
              [
                43.32826283037451,
                -1.9398610124836608
              ],
              [
                37.99003529362133,
                0.5844902862542796
              ],
              [
                24.0563885094017,
                14.925301714362618
              ],
              [
                0.1701084154921375,
                16.440821860546677
              ],
              [
                -10.868262247733824,
                1.1146897259718145
              ],
              [
                -3.582944626162501,
                -0.5971552103421658
              ],
              [
                -0.28719357028327863,
                -0.019545320337599037
              ]
            ]
          },
          {
            "type": "rectangle",
            "version": 1298,
            "versionNonce": 504559735,
            "isDeleted": false,
            "id": "6ldzdstTHWD2NSyZpjIOg",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2009.750948956059,
            "y": 1503.8496173056888,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 1835811300,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1353,
            "versionNonce": 990916217,
            "isDeleted": false,
            "id": "ivs_QGHAG6lFu1mrc09qQ",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2016.7088876275266,
            "y": 1503.5944970012197,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 164783460,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1373,
            "versionNonce": 1613418903,
            "isDeleted": false,
            "id": "1fSQ-3ayqjVqHJK8VuyFh",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2023.991524160524,
            "y": 1503.710450512912,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 212343012,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1394,
            "versionNonce": 701888345,
            "isDeleted": false,
            "id": "E8EWStWQBSOsaK4qU9Ft2",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2031.2509668768762,
            "y": 1503.3625666205105,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 561732708,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1436,
            "versionNonce": 2786999,
            "isDeleted": false,
            "id": "wZ7pAlvrm5QFNU_NtlYnW",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2038.1393202055147,
            "y": 1503.4553341013263,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 1377447908,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1340,
            "versionNonce": 1387242553,
            "isDeleted": false,
            "id": "lJi4w4P0QseZ4KgNEaXCX",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2016.5117382395738,
            "y": 1496.8453065724698,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 1049793380,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1364,
            "versionNonce": 750163927,
            "isDeleted": false,
            "id": "-wnimA_jQMKWc_-g6eaOC",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2023.8175724821076,
            "y": 1496.9380779461715,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 1429374692,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1388,
            "versionNonce": 293647641,
            "isDeleted": false,
            "id": "kbQ8u03t5Yo9KkMQKkAPk",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2031.216178098346,
            "y": 1496.9380701604036,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 176687716,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1407,
            "versionNonce": 1273201911,
            "isDeleted": false,
            "id": "-zI2AUQ5W8JbYNUCkTieB",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2030.9726410770982,
            "y": 1489.8409763748195,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 5.566352494330056,
            "height": 5.566352494330056,
            "seed": 291577316,
            "groupIds": [
              "eL4uAkeWwfpsKN2jOX7_g",
              "544RHJd-Dhaeg2-NkUCY1",
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false
          },
          {
            "type": "text",
            "version": 1917,
            "versionNonce": 2042407417,
            "isDeleted": false,
            "id": "goGzbKzw9Qo8Immm60G38",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 1999.6240197472443,
            "y": 1546.0921712247273,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 67,
            "height": 25,
            "seed": 804287196,
            "groupIds": [
              "0XWV8-iYC-gTs59lvQu5F"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788086506,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Docker",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Docker"
          }
        ],
        "id": "Qsr_bCZKjzSUef9igg3F_",
        "created": 1652788294057,
        "name": "Docker"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 3143,
            "versionNonce": 1591930393,
            "isDeleted": false,
            "id": "QtgIqDyZcHqpV8Ju_l857",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2131.4206261576473,
            "y": 1482.2143172736266,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 64.46115236495699,
            "height": 64.39942473426015,
            "seed": 1157021412,
            "groupIds": [
              "LrESEPdWDTzkPK50aCds2",
              "h1Qh7Eu_XCbl35WTZ9Pq9",
              "ZdJX-h95nCliReNZ8kLqG",
              "I10Yt6AhGQErTZkizQcks",
              "gR9JOi18bkX5JTHz6Te_0"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "type": "arrow",
                "id": "EUHZ_sUolb_30DI6OzWP4"
              },
              {
                "type": "arrow",
                "id": "HjpGCBxUuBW46Wd5r_3cI"
              },
              {
                "type": "arrow",
                "id": "qVpgRhAMH6njKSxkEUaob"
              },
              {
                "type": "arrow",
                "id": "fXUqR5l9-mJxPJpngO-uK"
              },
              {
                "type": "arrow",
                "id": "GST0HrCYDviCg-JDHslU7"
              },
              {
                "type": "arrow",
                "id": "WwJfE-IGw-hz6uAt8MWQ6"
              },
              {
                "type": "arrow",
                "id": "_xS_u95gyqYLnjH6Z_ekf"
              }
            ],
            "updated": 1652788096751,
            "link": null,
            "locked": false
          },
          {
            "type": "ellipse",
            "version": 1098,
            "versionNonce": 664624119,
            "isDeleted": false,
            "id": "kJiWasVkq7EzcAp_yYMnF",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2137.7099509559657,
            "y": 1488.5865456369318,
            "strokeColor": "#000000",
            "backgroundColor": "#868e96",
            "width": 51.88250276832002,
            "height": 51.88250276832002,
            "seed": 891096548,
            "groupIds": [
              "YZQku5Chfcs1VbFqtc9Z-",
              "gR9JOi18bkX5JTHz6Te_0"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788096752,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 4644,
            "versionNonce": 812630777,
            "isDeleted": false,
            "id": "uygbaH3pY7f71kinGo1KC",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2153.457714886652,
            "y": 1498.9945962464901,
            "strokeColor": "#000000",
            "backgroundColor": "#fff",
            "width": 28.10264153823924,
            "height": 32.45750960039449,
            "seed": 965325156,
            "groupIds": [
              "YZQku5Chfcs1VbFqtc9Z-",
              "gR9JOi18bkX5JTHz6Te_0"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788096752,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                2.522383435627326,
                0.8876695614221044
              ],
              [
                4.222250533550099,
                2.710891079770457
              ],
              [
                6.53876438289814,
                1.9494891881139838
              ],
              [
                13.00273268947289,
                2.0374391115495714
              ],
              [
                15.018859724261578,
                2.2364052653721083
              ],
              [
                16.578273739956423,
                0.9941438562971401
              ],
              [
                18.744233429245106,
                -0.5092823311506232
              ],
              [
                19.3382730064762,
                1.5588921397895759
              ],
              [
                19.283438583962543,
                3.566556278350808
              ],
              [
                21.26661686487244,
                5.46749782452002
              ],
              [
                22.153106695509578,
                10.909367329014938
              ],
              [
                21.45853734367018,
                16.608727547781946
              ],
              [
                19.438802781084537,
                18.8230883820351
              ],
              [
                16.687942584983702,
                20.009258415382803
              ],
              [
                13.71774469882833,
                20.664602961087855
              ],
              [
                14.50370475485716,
                21.40308436092641
              ],
              [
                15.390194585494283,
                23.040424434305827
              ],
              [
                15.572975993873055,
                28.176226896819482
              ],
              [
                15.536419712197318,
                31.28569415677526
              ],
              [
                14.567678247789736,
                31.823854903738514
              ],
              [
                7.240428539404906,
                31.948227269243866
              ],
              [
                6.324236729906197,
                31.05132655929166
              ],
              [
                6.068342758175913,
                27.392989048505843
              ],
              [
                4.377614730672068,
                27.862931757494
              ],
              [
                1.5810591824765403,
                28.041957551394276
              ],
              [
                -1.0327149573401755,
                26.542616527479623
              ],
              [
                -2.659469491911409,
                23.92436429168835
              ],
              [
                -4.240528674387946,
                22.313132146586064
              ],
              [
                -5.949534842729662,
                21.179302118551103
              ],
              [
                -3.628210956319009,
                21.40308436092641
              ],
              [
                -1.9831782809098755,
                22.671183734386556
              ],
              [
                -0.11880791544621871,
                24.43906344915162
              ],
              [
                2.147681548450816,
                25.543055844869823
              ],
              [
                4.660925913659192,
                25.22976070554441
              ],
              [
                5.9038394906349865,
                24.252578247172192
              ],
              [
                6.022647406081191,
                22.71594018286161
              ],
              [
                6.689799546663803,
                21.380706136688904
              ],
              [
                7.558011236463052,
                20.776494082275484
              ],
              [
                4.277084956063728,
                19.93358096932851
              ],
              [
                1.1423838023674477,
                18.89984919335192
              ],
              [
                -0.4569535209469784,
                16.571430507386058
              ],
              [
                -1.6541717458280658,
                10.963038997107194
              ],
              [
                -0.7037084222583516,
                5.6861115380996985
              ],
              [
                0.6671521405825978,
                4.240069736001822
              ],
              [
                -0.11880791544621871,
                2.2772861946741387
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "text",
            "version": 1975,
            "versionNonce": 563922199,
            "isDeleted": false,
            "id": "fdfeFdIFPqv8ob7vcD8RU",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 2131.1512023401265,
            "y": 1552.2135661651414,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 65,
            "height": 25,
            "seed": 1520252004,
            "groupIds": [
              "gR9JOi18bkX5JTHz6Te_0"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788096752,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "GitHub",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "GitHub"
          }
        ],
        "id": "K39d22cEulRClkwYv67oo",
        "created": 1652788286899,
        "name": "GitHub"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 300,
            "versionNonce": 421369913,
            "isDeleted": false,
            "id": "f_JKahZnSxJc4KAt7ZsW-",
            "fillStyle": "hachure",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1442.384234036135,
            "y": 1636.2963678444105,
            "strokeColor": "#2b8a3e",
            "backgroundColor": "transparent",
            "width": 269.51410950501486,
            "height": 164.54545632937743,
            "seed": 452493049,
            "groupIds": [],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "text",
            "version": 2059,
            "versionNonce": 1129440215,
            "isDeleted": false,
            "id": "LDxnjsBPCY93PCT2EGpUa",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 1491.4371102665593,
            "y": 1645.2696725568244,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 37,
            "height": 25,
            "seed": 1032660985,
            "groupIds": [
              "SD0C2qiCphyCRHCZftNUU"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "id": "bVaqFXvJckS26nzM_m6zD",
                "type": "arrow"
              }
            ],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "VPC",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "VPC"
          },
          {
            "type": "rectangle",
            "version": 409,
            "versionNonce": 1041246489,
            "isDeleted": false,
            "id": "Td3722QsARfBJtcZHOuFS",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1442.721971221976,
            "y": 1636.5078306958162,
            "strokeColor": "#2b8a3e",
            "backgroundColor": "#40c05788",
            "width": 39.6243416500605,
            "height": 42.52368372201621,
            "seed": 34349401,
            "groupIds": [
              "zrX79N-B9zMuBpQmVDD9X",
              "SD0C2qiCphyCRHCZftNUU"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 3514,
            "versionNonce": 154489079,
            "isDeleted": false,
            "id": "GPDOaIWIdOnW9UIZfR-hn",
            "fillStyle": "hachure",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1475.6296262085905,
            "y": 1666.1668186165264,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 32.27574323253868,
            "height": 18.361713520282862,
            "seed": 847652599,
            "groupIds": [
              "LYSo7W3gyad40JoNnPoy2",
              "zrX79N-B9zMuBpQmVDD9X",
              "SD0C2qiCphyCRHCZftNUU"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                3.549984432244912,
                -3.8949537333214295
              ],
              [
                2.3636841312957984,
                -8.495303540186455
              ],
              [
                -2.7289433979513547,
                -10.111388238124647
              ],
              [
                -3.027690717076837,
                -10.609548106174614
              ],
              [
                -3.567000789869894,
                -12.789455475380407
              ],
              [
                -6.056547102486405,
                -13.810998302611608
              ],
              [
                -8.328438953196809,
                -12.373992295078466
              ],
              [
                -8.57536552902286,
                -12.601775211762344
              ],
              [
                -12.065771512081795,
                -16.306198129166546
              ],
              [
                -17.183143313379162,
                -17.9479861601084
              ],
              [
                -22.002391699683074,
                -15.86580108709353
              ],
              [
                -24.284559618469785,
                -10.65550025600254
              ],
              [
                -24.644339441920692,
                -9.79120847277541
              ],
              [
                -28.1253575027867,
                -7.581853163765089
              ],
              [
                -28.72575880029376,
                -3.0476054391618987
              ],
              [
                -25.849736907374307,
                0.09177212746608632
              ],
              [
                -22.43830984753089,
                0.3704975936309154
              ],
              [
                -18.24098378130509,
                0.41372736017446243
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "rectangle",
            "version": 504,
            "versionNonce": 1279106553,
            "isDeleted": false,
            "id": "S9yi14_dAkxISVpNQePuS",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1458.147217704677,
            "y": 1657.4286516397065,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 6.723014307274803,
            "height": 6.1627631150019475,
            "seed": 58972761,
            "groupIds": [
              "qVX3fdAHxGWkYZqsWhS1z",
              "LYSo7W3gyad40JoNnPoy2",
              "zrX79N-B9zMuBpQmVDD9X",
              "SD0C2qiCphyCRHCZftNUU"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 648,
            "versionNonce": 1450056215,
            "isDeleted": false,
            "id": "H3JdgEwAIzhcdcvKskrMI",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1458.3447672988902,
            "y": 1657.3456514630645,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 3.735007948486001,
            "height": 3.735007948486001,
            "seed": 537867865,
            "groupIds": [
              "qVX3fdAHxGWkYZqsWhS1z",
              "LYSo7W3gyad40JoNnPoy2",
              "zrX79N-B9zMuBpQmVDD9X",
              "SD0C2qiCphyCRHCZftNUU"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                0.1660003532660483,
                -0.8300017663302128
              ],
              [
                0.5810012364311606,
                -2.0750044158255605
              ],
              [
                1.4940031793944009,
                -2.9880063587888444
              ],
              [
                2.407005122357648,
                -3.652007771852979
              ],
              [
                3.735007948486001,
                -3.7350079484860075
              ]
            ]
          },
          {
            "type": "line",
            "version": 727,
            "versionNonce": 581531353,
            "isDeleted": false,
            "id": "uBYTxi2Fk94vTgj17Ahqt",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1464.6627315703688,
            "y": 1657.3713769309054,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 3.735007948486001,
            "height": 3.735007948486001,
            "seed": 361767031,
            "groupIds": [
              "qVX3fdAHxGWkYZqsWhS1z",
              "LYSo7W3gyad40JoNnPoy2",
              "zrX79N-B9zMuBpQmVDD9X",
              "SD0C2qiCphyCRHCZftNUU"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -0.16600035326605678,
                -0.8300017663301986
              ],
              [
                -0.5810012364311561,
                -2.0750044158255605
              ],
              [
                -1.494003179394383,
                -2.9880063587888444
              ],
              [
                -2.407005122357667,
                -3.652007771852979
              ],
              [
                -3.7350079484860075,
                -3.7350079484860075
              ]
            ]
          }
        ],
        "id": "iuZ_6K7EwMGSXXV81NDXm",
        "created": 1652788276526,
        "name": "VPC"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 344,
            "versionNonce": 1341177655,
            "isDeleted": false,
            "id": "dPEYeIjNa1nluI_vQK-H9",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 10,
            "angle": 0,
            "x": 1753.0347076234943,
            "y": 1636.2963678444105,
            "strokeColor": "#0091e2",
            "backgroundColor": "#0091e2",
            "width": 269.51410950501486,
            "height": 164.54545632937743,
            "seed": 1970567865,
            "groupIds": [],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "text",
            "version": 2254,
            "versionNonce": 1944531897,
            "isDeleted": false,
            "id": "WgyWtsyoLJ6f6YcSKYfC_",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 1797.9846599072503,
            "y": 1645.2736234765187,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 147,
            "height": 25,
            "seed": 1311030615,
            "groupIds": [
              "jojPcobUJp1FYQLYaB99r"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "id": "bVaqFXvJckS26nzM_m6zD",
                "type": "arrow"
              }
            ],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Private subnet",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Private subnet"
          },
          {
            "type": "rectangle",
            "version": 589,
            "versionNonce": 136429655,
            "isDeleted": false,
            "id": "dpalnXDPuZPWrt4ocUhsM",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1753.269520862667,
            "y": 1636.5117816155105,
            "strokeColor": "#0091e2",
            "backgroundColor": "#4c6ef588",
            "width": 39.6243416500605,
            "height": 42.52368372201621,
            "seed": 563193753,
            "groupIds": [
              "z8fpnbqG9D5h5BJpjr8L7",
              "jojPcobUJp1FYQLYaB99r"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 461,
            "versionNonce": 1411011737,
            "isDeleted": false,
            "id": "ijAkpwJaRQ3Sm6tTVLxq_",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1762.93827098891,
            "y": 1655.1338121646274,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 20.286841397574015,
            "height": 16.448790322357453,
            "seed": 1976429719,
            "groupIds": [
              "-y-OIIssX5nNaTN-ohqqU",
              "z8fpnbqG9D5h5BJpjr8L7",
              "jojPcobUJp1FYQLYaB99r"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 522,
            "versionNonce": 1356176759,
            "isDeleted": false,
            "id": "CBU6E53PAYyGidh-Cw0-j",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0.037253345120129566,
            "x": 1767.2625911667262,
            "y": 1654.8338126416122,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 12.858316444380746,
            "height": 10.880113914476107,
            "seed": 332567095,
            "groupIds": [
              "-y-OIIssX5nNaTN-ohqqU",
              "z8fpnbqG9D5h5BJpjr8L7",
              "jojPcobUJp1FYQLYaB99r"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -0.329700421650787,
                -3.9564050598095566
              ],
              [
                1.3188016866031462,
                -8.90191138457145
              ],
              [
                6.2643080113649745,
                -10.880113914476107
              ],
              [
                10.550413492825204,
                -8.90191138457145
              ],
              [
                12.198915601079173,
                -4.945506324761892
              ],
              [
                12.52861602272996,
                -0.3297004216509265
              ]
            ]
          },
          {
            "type": "ellipse",
            "version": 442,
            "versionNonce": 116808057,
            "isDeleted": false,
            "id": "nc52cTahwemUriesKHteX",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1770.3931057805657,
            "y": 1659.2831289420449,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 5.275206746412619,
            "height": 5.275206746412619,
            "seed": 727656153,
            "groupIds": [
              "-y-OIIssX5nNaTN-ohqqU",
              "z8fpnbqG9D5h5BJpjr8L7",
              "jojPcobUJp1FYQLYaB99r"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 420,
            "versionNonce": 1297143447,
            "isDeleted": false,
            "id": "le0EGJ_WCnfaY7p2IsMOZ",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1773.0339879374565,
            "y": 1664.7248252911374,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 0,
            "height": 4.945506324761884,
            "seed": 888331287,
            "groupIds": [
              "-y-OIIssX5nNaTN-ohqqU",
              "z8fpnbqG9D5h5BJpjr8L7",
              "jojPcobUJp1FYQLYaB99r"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                0,
                4.945506324761884
              ]
            ]
          }
        ],
        "id": "tFo9OYIShjpGSvTwOAS2f",
        "created": 1652788267525,
        "name": "Private subnet"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 432,
            "versionNonce": 994005687,
            "isDeleted": false,
            "id": "nN_FFSvlJJflT8rpZVgCX",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 10,
            "angle": 0,
            "x": 2068.196153089959,
            "y": 1636.2963678444105,
            "strokeColor": "#2b8a3e",
            "backgroundColor": "#2b8a3e",
            "width": 269.51410950501486,
            "height": 164.54545632937743,
            "seed": 2043392407,
            "groupIds": [],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "text",
            "version": 2349,
            "versionNonce": 1806513719,
            "isDeleted": false,
            "id": "tc4qHpKR_vXNvf3-Pf1R4",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 2114.361939143105,
            "y": 1645.9635823398605,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 129,
            "height": 25,
            "seed": 807566071,
            "groupIds": [
              "PV8Gn0PijRZzjX2hMKwgp"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "id": "bVaqFXvJckS26nzM_m6zD",
                "type": "arrow"
              }
            ],
            "updated": 1652788239861,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Public subnet",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Public subnet"
          },
          {
            "type": "rectangle",
            "version": 665,
            "versionNonce": 1145564087,
            "isDeleted": false,
            "id": "zmrROgE716GaUWwB116de",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2078.0676224585577,
            "y": 1655.823771027969,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 20.286841397574015,
            "height": 16.448790322357453,
            "seed": 975569943,
            "groupIds": [
              "xCQT5sKyDemXqnqKwHTF9",
              "6tYLHZ6RYpPuaKiv1UfQv",
              "PV8Gn0PijRZzjX2hMKwgp"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 726,
            "versionNonce": 1967591225,
            "isDeleted": false,
            "id": "08gY5fDDsjcoAZHTdjq8H",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0.037253345120129566,
            "x": 2082.3919426363746,
            "y": 1655.5237715049534,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 12.858316444380746,
            "height": 10.880113914476107,
            "seed": 1715285209,
            "groupIds": [
              "xCQT5sKyDemXqnqKwHTF9",
              "6tYLHZ6RYpPuaKiv1UfQv",
              "PV8Gn0PijRZzjX2hMKwgp"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -0.329700421650787,
                -3.9564050598095566
              ],
              [
                1.3188016866031462,
                -8.90191138457145
              ],
              [
                6.2643080113649745,
                -10.880113914476107
              ],
              [
                10.550413492825204,
                -8.90191138457145
              ],
              [
                12.198915601079173,
                -4.945506324761892
              ],
              [
                12.52861602272996,
                -0.3297004216509265
              ]
            ]
          },
          {
            "type": "ellipse",
            "version": 646,
            "versionNonce": 836721879,
            "isDeleted": false,
            "id": "NK5hWvP-BHfOMXbzjWyvQ",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2085.522457250214,
            "y": 1659.9730878053863,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 5.275206746412619,
            "height": 5.275206746412619,
            "seed": 152791351,
            "groupIds": [
              "xCQT5sKyDemXqnqKwHTF9",
              "6tYLHZ6RYpPuaKiv1UfQv",
              "PV8Gn0PijRZzjX2hMKwgp"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 624,
            "versionNonce": 1676853273,
            "isDeleted": false,
            "id": "PO7G54ml-sCiqRZGCGtPE",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2088.163339407105,
            "y": 1665.4147841544793,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 0,
            "height": 4.945506324761884,
            "seed": 932456889,
            "groupIds": [
              "xCQT5sKyDemXqnqKwHTF9",
              "6tYLHZ6RYpPuaKiv1UfQv",
              "PV8Gn0PijRZzjX2hMKwgp"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                0,
                4.945506324761884
              ]
            ]
          },
          {
            "type": "rectangle",
            "version": 596,
            "versionNonce": 430680567,
            "isDeleted": false,
            "id": "YwX1Ni6wuwrdk5CtH0XKI",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2068.3988723323146,
            "y": 1637.2017404788526,
            "strokeColor": "#2b8a3e",
            "backgroundColor": "#40c05788",
            "width": 39.6243416500605,
            "height": 42.52368372201621,
            "seed": 962056087,
            "groupIds": [
              "6tYLHZ6RYpPuaKiv1UfQv",
              "PV8Gn0PijRZzjX2hMKwgp"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788094454,
            "link": null,
            "locked": false
          }
        ],
        "id": "RMcbGqneckVAijgb0ksgq",
        "created": 1652788258854,
        "name": "Public subnet"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "text",
            "version": 884,
            "versionNonce": 1252295383,
            "isDeleted": false,
            "id": "QJfRdycBHBpPbSJ2qkaHR",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 1482.749129546251,
            "y": 2105.0869523931538,
            "strokeColor": "#000000",
            "backgroundColor": "white",
            "width": 46,
            "height": 25,
            "seed": 14301209,
            "groupIds": [
              "Viu2YdNB2na1uSBiKAFRr"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "User",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "User"
          },
          {
            "type": "line",
            "version": 1193,
            "versionNonce": 33225241,
            "isDeleted": false,
            "id": "ossF4GzkYCgGsHklL1hl0",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1479.9619088977436,
            "y": 2095.434026383175,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 49.26942071813747,
            "height": 43.87300421060919,
            "seed": 506339289,
            "groupIds": [
              "1qNPPmx9UHXcelOK9AVB0",
              "Viu2YdNB2na1uSBiKAFRr"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                5.518175120431392,
                -29.072472669680792
              ],
              [
                23.649321944705985,
                -43.87300421060919
              ],
              [
                41.780468768980576,
                -32.244015142736835
              ],
              [
                49.26942071813747,
                -3.0188078795298896
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "ellipse",
            "version": 930,
            "versionNonce": 1792806903,
            "isDeleted": false,
            "id": "2zyw5TfId7xzj1osFRw3u",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1492.4157797340592,
            "y": 2028.7429785973186,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 25.225943407686408,
            "height": 22.072700481725683,
            "seed": 19327833,
            "groupIds": [
              "1qNPPmx9UHXcelOK9AVB0",
              "Viu2YdNB2na1uSBiKAFRr"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          }
        ],
        "id": "UFgHjkyx6W38-mAJ-BNVT",
        "created": 1652788139616,
        "name": "User"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "text",
            "version": 917,
            "versionNonce": 1604126201,
            "isDeleted": false,
            "id": "SPeAjZMYCx8EoDI65dPCE",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 1648.6634829780694,
            "y": 2107.713080534573,
            "strokeColor": "#000000",
            "backgroundColor": "white",
            "width": 57,
            "height": 25,
            "seed": 769940439,
            "groupIds": [
              "3Au8BUSkq1LVGtylUmgjQ"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Users",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Users"
          },
          {
            "type": "ellipse",
            "version": 1846,
            "versionNonce": 957952535,
            "isDeleted": false,
            "id": "NmoZVFoqQX1Vu5MZKFy1V",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1689.1062999172887,
            "y": 2040.453237200236,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 19.75034363276957,
            "height": 17.281550678673437,
            "seed": 1178681657,
            "groupIds": [
              "wDTsFXl-vMcxnOc1Vhb-n",
              "2Je6Qe5C2ipP25gzhXag3",
              "3Au8BUSkq1LVGtylUmgjQ"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "ellipse",
            "version": 1890,
            "versionNonce": 1708908249,
            "isDeleted": false,
            "id": "h6PU4x9jiv-rRAUghe8Ai",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1645.9226257929668,
            "y": 2041.03630498387,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 19.75034363276957,
            "height": 17.281550678673437,
            "seed": 987148825,
            "groupIds": [
              "wDTsFXl-vMcxnOc1Vhb-n",
              "2Je6Qe5C2ipP25gzhXag3",
              "3Au8BUSkq1LVGtylUmgjQ"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 2073,
            "versionNonce": 1568200503,
            "isDeleted": false,
            "id": "JAt8qoX76olLN6uxixJt7",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1656.3744458002311,
            "y": 2099.9673407215196,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 41.80600213253467,
            "height": 37.22704429756421,
            "seed": 1632306937,
            "groupIds": [
              "wDTsFXl-vMcxnOc1Vhb-n",
              "2Je6Qe5C2ipP25gzhXag3",
              "3Au8BUSkq1LVGtylUmgjQ"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                4.682272238843876,
                -24.66852332971124
              ],
              [
                20.06688102361667,
                -37.22704429756421
              ],
              [
                35.45148980838941,
                -27.359634965679646
              ],
              [
                41.80600213253467,
                -2.561513547547756
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "ellipse",
            "version": 1784,
            "versionNonce": 1955371961,
            "isDeleted": false,
            "id": "q84Lz9t5dvdU-A-7bgTEI",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1666.860567951041,
            "y": 2043.3928294016825,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 21.404673091857735,
            "height": 18.729088955375612,
            "seed": 1679933401,
            "groupIds": [
              "wDTsFXl-vMcxnOc1Vhb-n",
              "2Je6Qe5C2ipP25gzhXag3",
              "3Au8BUSkq1LVGtylUmgjQ"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 1186,
            "versionNonce": 1558632535,
            "isDeleted": false,
            "id": "Vg-rpWJ3bCmlGFwLkz2RJ",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1685.525781254682,
            "y": 2066.2982760364666,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 33.437317203044365,
            "height": 37.41795020340682,
            "seed": 808629655,
            "groupIds": [
              "2Je6Qe5C2ipP25gzhXag3",
              "3Au8BUSkq1LVGtylUmgjQ"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                5.174822900471103,
                -5.57288620050744
              ],
              [
                9.553519200869804,
                -8.3593293007612
              ],
              [
                17.116721901558428,
                -8.757392600797402
              ],
              [
                22.291544802029577,
                -7.563202700688624
              ],
              [
                25.874114502355752,
                -3.5825697003262533
              ],
              [
                28.262494302573206,
                1.5922532001448921
              ],
              [
                30.650874102790677,
                7.961266000724821
              ],
              [
                32.64119060297189,
                14.33027880130475
              ],
              [
                33.437317203044365,
                19.50510170177589
              ],
              [
                32.64119060297189,
                24.67992460224705
              ],
              [
                29.45668420268195,
                27.068304402464427
              ],
              [
                25.077987902283255,
                28.26249430257321
              ],
              [
                18.708975101703373,
                28.660557602609412
              ],
              [
                14.728342101340951,
                27.86443100253699
              ],
              [
                14.330278801304704,
                22.291544802029662
              ],
              [
                12.738025601159729,
                18.70897510170331
              ],
              [
                9.951582500906056,
                13.136088901195967
              ],
              [
                5.970949500543595,
                5.572886200507347
              ],
              [
                0,
                0
              ]
            ]
          },
          {
            "type": "line",
            "version": 1481,
            "versionNonce": 1808972953,
            "isDeleted": false,
            "id": "mPuYUIgb4Y_xezXZi9asr",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1667.606994801348,
            "y": 2066.286400133062,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 32.24312730293567,
            "height": 39.01020340355187,
            "seed": 1685387257,
            "groupIds": [
              "2Je6Qe5C2ipP25gzhXag3",
              "3Au8BUSkq1LVGtylUmgjQ"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                -3.980633000362431,
                -4.378696300398655
              ],
              [
                -8.359329300761118,
                -7.165139400652425
              ],
              [
                -15.922532001449774,
                -7.56320270068861
              ],
              [
                -21.097354901920916,
                -6.369012800579835
              ],
              [
                -24.679924602247063,
                -2.388379800217473
              ],
              [
                -27.06830440246457,
                2.7864431002536705
              ],
              [
                -29.45668420268202,
                9.155455900833594
              ],
              [
                -31.4470007028632,
                15.524468701413529
              ],
              [
                -32.24312730293567,
                20.699291601884667
              ],
              [
                -31.4470007028632,
                25.87411450235582
              ],
              [
                -28.262494302573295,
                28.262494302573188
              ],
              [
                -24.281861302210807,
                30.25281080275446
              ],
              [
                -17.912848501630954,
                31.44700070286316
              ],
              [
                -11.145772401014788,
                31.447000702863257
              ],
              [
                -10.349645800942298,
                24.281861302210825
              ],
              [
                -9.553519200869822,
                20.699291601884582
              ],
              [
                -8.359329300761118,
                14.728342101341028
              ],
              [
                -4.7767596004349215,
                6.767076100616125
              ],
              [
                0,
                0
              ]
            ]
          }
        ],
        "id": "2WIQDCyDP0rYd2UMhMFNE",
        "created": 1652788132269,
        "name": "Users"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 1797,
            "versionNonce": 1285967609,
            "isDeleted": false,
            "id": "XY68X70pWBB_KTuFENlCA",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1872.6978641000337,
            "y": 2023.9314163933077,
            "strokeColor": "#000000",
            "backgroundColor": "#868e96",
            "width": 44.89096291762419,
            "height": 68.65473186014601,
            "seed": 998136375,
            "groupIds": [
              "Due5tD6SVG60wFltRvqxd",
              "TDLQl-R1wAzxPa-KZXh88"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1959,
            "versionNonce": 1927608599,
            "isDeleted": false,
            "id": "IXe55vQDHa7ParMVN5EnJ",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1877.8373858616685,
            "y": 2029.1656926777612,
            "strokeColor": "#000000",
            "backgroundColor": "#fff",
            "width": 35.37268888043181,
            "height": 52.508196731676236,
            "seed": 88341335,
            "groupIds": [
              "Due5tD6SVG60wFltRvqxd",
              "TDLQl-R1wAzxPa-KZXh88"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "id": "Q3sXfBVz75bTl5TIhEB0s",
                "type": "arrow"
              }
            ],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "ellipse",
            "version": 1995,
            "versionNonce": 1423181785,
            "isDeleted": false,
            "id": "KRpxkVGxhpGc891OdiqcB",
            "fillStyle": "solid",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1891.9016475570904,
            "y": 2083.9210188706206,
            "strokeColor": "#000000",
            "backgroundColor": "#fff",
            "width": 7.24416548958712,
            "height": 7.24416548958712,
            "seed": 66615415,
            "groupIds": [
              "Due5tD6SVG60wFltRvqxd",
              "TDLQl-R1wAzxPa-KZXh88"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1648,
            "versionNonce": 406044215,
            "isDeleted": false,
            "id": "i9cMOQK3OV6uebTtpDAVC",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1883.0859307662918,
            "y": 2035.8496961999592,
            "strokeColor": "#000000",
            "backgroundColor": "#4c6ef588",
            "width": 24.875599071184233,
            "height": 12.608047084964703,
            "seed": 1835028887,
            "groupIds": [
              "Due5tD6SVG60wFltRvqxd",
              "TDLQl-R1wAzxPa-KZXh88"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "rectangle",
            "version": 1692,
            "versionNonce": 77046969,
            "isDeleted": false,
            "id": "WLPcX4j7cDcAXBAGiH37S",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 1883.0859307662918,
            "y": 2058.3899714141685,
            "strokeColor": "#000000",
            "backgroundColor": "#4c6ef588",
            "width": 24.875599071184233,
            "height": 12.608047084964703,
            "seed": 1253050039,
            "groupIds": [
              "Due5tD6SVG60wFltRvqxd",
              "TDLQl-R1wAzxPa-KZXh88"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [
              {
                "id": "Q3sXfBVz75bTl5TIhEB0s",
                "type": "arrow"
              }
            ],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "text",
            "version": 1164,
            "versionNonce": 1840045911,
            "isDeleted": false,
            "id": "otYDQpWPH4kWxm8LQuC1i",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 1863.6433455588458,
            "y": 2100.8780236517937,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 63,
            "height": 25,
            "seed": 227676793,
            "groupIds": [
              "TDLQl-R1wAzxPa-KZXh88"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Device",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Device"
          }
        ],
        "id": "9_9pebw1kmiJPt-x9timk",
        "created": 1652788125156,
        "name": "Device"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "rectangle",
            "version": 750,
            "versionNonce": 1637405529,
            "isDeleted": false,
            "id": "7Pk-TLxXtuWZkXpaK8tS4",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2067.820080211402,
            "y": 2024.956526167033,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 37.26835999695436,
            "height": 69.56760532764793,
            "seed": 372949593,
            "groupIds": [
              "76AB9cfQxi8EevCVG_nyp"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "text",
            "version": 1296,
            "versionNonce": 1066625719,
            "isDeleted": false,
            "id": "NiaPt1_volLg4xDhmhVPw",
            "fillStyle": "hachure",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 2054.9542602098786,
            "y": 2104.416032826593,
            "strokeColor": "#000000",
            "backgroundColor": "transparent",
            "width": 63,
            "height": 25,
            "seed": 81738841,
            "groupIds": [
              "76AB9cfQxi8EevCVG_nyp"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Server",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Server"
          },
          {
            "type": "line",
            "version": 595,
            "versionNonce": 1169621049,
            "isDeleted": false,
            "id": "GDASN8Ar7kqbTnHNqRkxb",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2072.3046375445324,
            "y": 2032.6524768329887,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 28.572409330998198,
            "height": 2.2737367544323206e-13,
            "seed": 627417527,
            "groupIds": [
              "76AB9cfQxi8EevCVG_nyp"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                28.572409330998198,
                2.2737367544323206e-13
              ]
            ]
          },
          {
            "type": "line",
            "version": 627,
            "versionNonce": 1432550359,
            "isDeleted": false,
            "id": "BBQgQPZgkKsxQ6zNRzIUr",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2072.1680555443795,
            "y": 2039.056274610597,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 28.572409330998198,
            "height": 2.2737367544323206e-13,
            "seed": 204892599,
            "groupIds": [
              "76AB9cfQxi8EevCVG_nyp"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                28.572409330998198,
                2.2737367544323206e-13
              ]
            ]
          },
          {
            "type": "line",
            "version": 609,
            "versionNonce": 1664913689,
            "isDeleted": false,
            "id": "Usz5re68bOeeSKgyCLVmq",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2072.1371702106403,
            "y": 2045.4600723882063,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 28.572409330998198,
            "height": 2.2737367544323206e-13,
            "seed": 987848505,
            "groupIds": [
              "76AB9cfQxi8EevCVG_nyp"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                28.572409330998198,
                2.2737367544323206e-13
              ]
            ]
          },
          {
            "type": "line",
            "version": 613,
            "versionNonce": 1768122615,
            "isDeleted": false,
            "id": "BbKD57FKlc-NgH63VqGFw",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2072.1371702106403,
            "y": 2051.863870165815,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 28.572409330998198,
            "height": 2.2737367544323206e-13,
            "seed": 769157465,
            "groupIds": [
              "76AB9cfQxi8EevCVG_nyp"
            ],
            "strokeSharpness": "round",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                28.572409330998198,
                2.2737367544323206e-13
              ]
            ]
          }
        ],
        "id": "RK7rWRm_bqsgMR-yyEact",
        "created": 1652788117720,
        "name": "Server"
      },
      {
        "status": "published",
        "elements": [
          {
            "type": "text",
            "version": 937,
            "versionNonce": 932488601,
            "isDeleted": false,
            "id": "BR44CilwTIbONCvGKgLhq",
            "fillStyle": "solid",
            "strokeWidth": 1,
            "strokeStyle": "solid",
            "roughness": 1,
            "opacity": 100,
            "angle": 0,
            "x": 2276.2302177969473,
            "y": 2086.920421581179,
            "strokeColor": "#000000",
            "backgroundColor": "#868e96",
            "width": 50,
            "height": 25,
            "seed": 2109994009,
            "groupIds": [
              "z8UUgMUPNsq5axJkMXtT8"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "fontSize": 20,
            "fontFamily": 1,
            "text": "Email",
            "baseline": 18,
            "textAlign": "left",
            "verticalAlign": "top",
            "containerId": null,
            "originalText": "Email"
          },
          {
            "type": "rectangle",
            "version": 999,
            "versionNonce": 899996791,
            "isDeleted": false,
            "id": "UeFyWyJ1YbSMu7K0pkCpY",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2269.9867164774682,
            "y": 2035.3562941088205,
            "strokeColor": "#000000",
            "backgroundColor": "#ced4da",
            "width": 62.48700263895784,
            "height": 41.463338199682276,
            "seed": 1690575833,
            "groupIds": [
              "UfI5AJ2N6H-8qqUQeyy3l",
              "z8UUgMUPNsq5axJkMXtT8"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false
          },
          {
            "type": "line",
            "version": 826,
            "versionNonce": 150899321,
            "isDeleted": false,
            "id": "e-Z3aRG8x2-hd5cKdX2t7",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2270.8896528022965,
            "y": 2039.198838061454,
            "strokeColor": "#000000",
            "backgroundColor": "#868e96",
            "width": 30.732287023896305,
            "height": 23.925868693893968,
            "seed": 1478770873,
            "groupIds": [
              "UfI5AJ2N6H-8qqUQeyy3l",
              "z8UUgMUPNsq5axJkMXtT8"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                30.732287023896305,
                23.925868693893968
              ]
            ]
          },
          {
            "type": "line",
            "version": 912,
            "versionNonce": 1944073623,
            "isDeleted": false,
            "id": "au4tcwg8T7lC7un-8nooJ",
            "fillStyle": "cross-hatch",
            "strokeWidth": 2,
            "strokeStyle": "solid",
            "roughness": 0,
            "opacity": 100,
            "angle": 0,
            "x": 2302.757305018425,
            "y": 2064.267967494489,
            "strokeColor": "#000000",
            "backgroundColor": "#868e96",
            "width": 29.30307776200009,
            "height": 29.23224875584021,
            "seed": 657310105,
            "groupIds": [
              "UfI5AJ2N6H-8qqUQeyy3l",
              "z8UUgMUPNsq5axJkMXtT8"
            ],
            "strokeSharpness": "sharp",
            "boundElements": [],
            "updated": 1652788090905,
            "link": null,
            "locked": false,
            "startBinding": null,
            "endBinding": null,
            "lastCommittedPoint": null,
            "startArrowhead": null,
            "endArrowhead": null,
            "points": [
              [
                0,
                0
              ],
              [
                29.30307776200009,
                -29.23224875584021
              ]
            ]
          }
        ],
        "id": "yjClh1WmDx5TUhWugAREM",
        "created": 1652788110401,
        "name": "Email"
      }
    ],
  ],
};
