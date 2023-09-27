import {
  default as img13,
  default as img14,
  default as img15,
} from "../../assets/prints/acer__gold-2x.jpg";
import {
  default as img7,
  default as img8,
  default as img9,
} from "../../assets/prints/ash__gold-2x.jpg";
import {
  default as img22,
  default as img23,
  default as img24,
} from "../../assets/prints/ash__round-2x.jpg";
import {
  default as img19,
  default as img20,
  default as img21,
} from "../../assets/prints/cherry__multi-2x.jpg";
import {
  default as img25,
  default as img26,
  default as img27,
} from "../../assets/prints/cherry_cracked-2x.jpg";
import {
  default as img4,
  default as img5,
  default as img6,
} from "../../assets/prints/cherry_dec-2x.jpg";
import {
  default as img16,
  default as img17,
  default as img18,
} from "../../assets/prints/douglas__black-2x.jpg";
import img1 from "../../assets/prints/leylandii1.jpg";
import img2 from "../../assets/prints/leylandii2.jpg";
import img3 from "../../assets/prints/leylandii3.jpg";
import {
  default as img10,
  default as img11,
  default as img12,
} from "../../assets/prints/sycamore__green-2x.jpg";
//leylandii = price_1LxHiBGKpDMhyEuLOkox92AU
//prunus= price_1LxHk4GKpDMhyEuL53Xfr9oB
const products = [
  {
    id: "CupressusXleylandiiA1",
    name: "Cupressus x leylandii",
    format: "A1 paper (594 x 841 mm)",
    price: "90",
    description:
      "Print of a section of a Leyland Cypress tree with a crack between the two main stems. \n\nPrint 505 x 675 mm approx. \nPaper (594 x 841 mm)\n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "This Cypress was growing, leaning against a fence in a back garden in the town of Musselburgh, Scotland.\n\n I was about 18 metres high and had a large fracture between the two main stems produced by the wind hitting the crown.\n\nWhen this tree grew taller than the building that was sheltering it the wind started hitting it directly and because the tree had never had to endure similar stress before it had not grow resistance and it cracked easily.",
    imgs: [img1, img2, img3],
    link: "/leylandii",
    previous: "/prunusAvium",
    next: "/prunusSerrulata",
  },
  {
    id: "PrunusSerrulataKanzanA2",
    name: "Prunus serrulata 'Kanzan'",
    format: "A2 paper (420 x 594 mm)",
    price: "60",
    description:
      "Print section the main stem of Cherry Tree with large decay pockets. \n\nPrint 320 x 350 mm approx.\nPaper (420 x 594 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "This flowering cherry tree hybrid was first developed for its blossom in Japan during the Tokugawa period (1600 - 1800).\n\n It used to grow in Musselburgh, Scotland, on a grass lawn, and it was often damaged by lawn mowers and other machinery. This allowed for a decaying fungi to enter the hardwood and produce a vertical column of decay represented by the empty space in the lower half of the print.\n The base of the tree became unstable and the tree was felled for safety.",
    imgs: [img4, img5, img6],
    link: "/prunusSerrulata",
    previous: "/leylandii",
    next: "/fraxinusSmall",
  },
  {
    id: "FraxinusExcelsiorA4",
    name: "Fraxinus excelsior A4",
    format: "A4 paper (297 x 210 mm)",
    price: "25",
    description:
      "Print of a section of the branch of an Ash Tree. Gold ink on black paper. \n\nPrint 126 x 137 mm approx.\nPaper (297 x 210 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "This branch of an Ash Tree belonged to a specimen growing in Haddington, Scotland.\n\n The eccentric ring growth shows the effect of compression and tension in wood in trees. The narrower rings are the product of gravity pressing down on the bottom of the branch producing wider rings on the top by pulling down and expanding the ring.\nThis same effect can be observed in leaning trees",
    imgs: [img7, img8, img9],
    link: "/fraxinusSmall",
    previous: "/prunusSerrulata",
    next: "/sycamore",
  },
  {
    id: "AcerPseudoplatanusA1",
    name: "Acer pseudoplatanus",
    format: "A1 paper (594 x 841 mm)",
    price: "90",
    description:
      "Large section of the trunk of a Sycamore tree hand-printed on A1 paper. \n\nPrint 532 x 583 mm approx.\nPaper (594 x 841 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "This is a large section of the trunk of a Sycamore tree that was growing on the bank of the river Tyne in Haddington, Scotland.\n\n Very tall old tree, had lost some capacity to fight fungal invasion due to its age and size, and finally succumbed to colonisation of the lower stem by Polyporus squamosus (Dryad's Saddle).\n\nThis common fungi produces white rot that makes the wood brittle by consuming the lignin in the cells, removing rigidity.",
    imgs: [img10, img11, img12],
    link: "/sycamore",
    previous: "/fraxinusSmall",
    next: "/platanoides",
  },
  {
    id: "AcerPlatanoidesA2",
    name: "Acer platanoides",
    format: "A2 paper (420 x 594 mm)",
    price: "60",
    description:
      "Section of Norway Maple on A2 white paper, printed with metallic gold ink. \n\nPrint 310 x 385 mm approx.\nPaper (420 x 594 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "This Norway Maple was growing in a park in the town of Musselburgh, Scotland.\n\n The lower section of the trunk from about half of the tree size had a large decay pocket from an old wound, possibly the product of vandalism.\n\nTha main canopy fork had also developed a crack and due to its proximity to a play area the tree was felled.",
    imgs: [img13, img14, img15],
    link: "/platanoides",
    previous: "/sycamore",
    next: "/douglas",
  },
  {
    id: "PseudotsugaMenziesiiA1",
    name: "Pseudotsuga menziesii",
    format: "A1 paper (594 x 841 mm)",
    price: "90",
    description:
      "The rings of the main stem of a Douglas Fir with marks from the growth of the side branches. \n\nPrint 410 x 410 mm approx.\nPaper (594 x 841 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "A Douglas Fir from Gifford, Scotland.\n\n These trees owe their name to David Douglas, a botanist who introduced them in the UK in 1827.\n\nThis one in particular was a very tall tree growing in a narrow space between a house and a public school\n\nThe crown was showing advanced signs of dieback and it was removed due to safety concerns.",
    imgs: [img16, img17, img18],
    link: "/douglas",
    previous: "/platanoides",
    next: "/prunusTwin",
  },
  {
    id: "PrunusSerrulataA2",
    name: "Prunus serrulata",
    format: "A2 paper (420 x 594 mm)",
    price: "60",
    description:
      "A Cherry Tree’s fork with a heart shaped wound produced by fungal rot. \n\nPrint 320 x 390 mm approx.\nPaper (420 x 594 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "Another cherry tree originally from east Asia; mainly Japan, China and Korea. This specimen lived in Dunbar, Scotland.\n\n This print represents a section of the tree's main fork and the heart shaped gap seen in between the two stems is the result od colonisation by wood decaying fungi\n\n This amount of decay and several cracks in the sem together with its proximity to a public footpath were the main reasons the tree was removed.",
    imgs: [img19, img20, img21],
    link: "/prunusTwin",
    previous: "/douglas",
    next: "/roundAsh",
  },
  {
    id: "FraxinusExcelsiorA2",
    name: "Fraxinus excelsior",
    format: "A2 paper (420 x 594 mm)",
    price: "60",
    description:
      "An Ash Tree print with an off centre produced by growing leaning heavily. \n\nPrint 300 x 310 mm approx.\nPaper (420 x 594 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "A cross section of an Ash Tree, once more from the town of Musselburgh in Scotland.\n\n This tree was leaning heavily over a footpath and this lean is what produced the eccentric ring growth we can observe in the print. The portion of the rings growing closer together corresponds with the side where the weight of the tree was compressing the wood.\n\nIn this case the tree also showed sign of root-plate instability and it was taken down for safety.",
    imgs: [img22, img23, img24],
    link: "/roundAsh",
    previous: "/prunusTwin",
    next: "/prunusAvium",
  },
  {
    id: "PrunusAviumA2",
    name: "Prunus avium",
    format: "A2 paper (420 x 594 mm)",
    price: "60",
    description:
      "Section of a stem of a Bird Cherry Tree using black and red ink together. \n\nPrint 260 x 305 mm approx.\nPaper (420 x 594 mm) \n\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
    description2:
      "Bird cherry or wild cherry from North Berwick, Scotland. \n\nThis tree species is in the same family as common roses, and it is of great importance for wild life due to the fruits they produce.\n\n This specimen was felled after it died off for no apparent reason while it has been growing on a grass area near the Lodge Grounds in North Berwick.",
    imgs: [img25, img26, img27],
    link: "/prunusAvium",
    previous: "/roundAsh",
    next: "/leylandii",
  },
];

function getProductData(id) {
  let productData = products.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { getProductData, products };
