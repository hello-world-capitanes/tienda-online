import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAllProducts() {
    return [
      {
        id: 1,
        name: 'Wine - Champagne Brut Veuve',
        description: 'Drainage of Left Palatine Bone, Perc Endo Approach',
        price: 36.5,
        image: 'http://dummyimage.com/300x300.png/dddddd/000000',
      },
      {
        id: 2,
        name: 'Yogurt - Plain',
        description: 'Bypass L Ext Iliac Art to R Int Ilia w Synth Sub, Open',
        price: 29.62,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 3,
        name: 'Chips - Assorted',
        description:
          'Occlusion of L Main Bronc with Intralum Dev, Open Approach',
        price: 33.92,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
      {
        id: 4,
        name: 'Shrimp - 16/20, Peeled Deviened',
        description: 'Revision of Int Fix in R Acetabulum, Open Approach',
        price: 22.63,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      },
      {
        id: 5,
        name: 'Veal - Leg, Provimi - 50 Lb Max',
        description:
          'Supplement Mesenteric Lymph with Nonaut Sub, Open Approach',
        price: 79.81,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      },
      {
        id: 6,
        name: 'Chicken Giblets',
        description:
          'Bypass Abd Aorta to B Renal A with Synth Sub, Open Approach',
        price: 49.79,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 7,
        name: 'Bread - French Stick',
        description: 'Restrict R Brach Art w Extralum Dev, Perc Endo',
        price: 74.78,
        image: 'http://dummyimage.com/300x300.png/dddddd/000000',
      },
      {
        id: 8,
        name: 'Pepper - Red, Finger Hot',
        description: 'Excision of Small Intestine, Perc Endo Approach, Diagn',
        price: 97.18,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      },
      {
        id: 9,
        name: 'Hinge W Undercut',
        description: 'Supplement R Up Arm Muscle with Synth Sub, Open Approach',
        price: 43.61,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      },
      {
        id: 10,
        name: 'Yogurt - Assorted Pack',
        description: 'Inspection of Right Femoral Region, Open Approach',
        price: 77.19,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 11,
        name: 'Oysters - Smoked',
        description:
          'Extirpation of Matter from Right Foot Artery, Perc Approach',
        price: 43.59,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
      {
        id: 12,
        name: 'Wine - Saint - Bris 2002, Sauv',
        description: 'Excision of Right Lower Lung Lobe, Via Opening, Diagn',
        price: 10.09,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
      {
        id: 13,
        name: 'Sugar - Invert',
        description:
          'Release Pancreatic Duct, Via Natural or Artificial Opening',
        price: 41.11,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
      {
        id: 14,
        name: 'Sour Puss Raspberry',
        description:
          'Drainage of Right Toe Phalanx with Drain Dev, Open Approach',
        price: 66.92,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 15,
        name: 'Pepper - Paprika, Spanish',
        description:
          'Reattachment of Esophagus, Percutaneous Endoscopic Approach',
        price: 38.6,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 16,
        name: 'Wine - Chateau Aqueria Tavel',
        description: 'Introduction of Other Gas into Resp Tract, Perc Approach',
        price: 24.91,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
      {
        id: 17,
        name: 'Pepper - Red Thai',
        description:
          'Nonimaging Nuclear Medicine Assay of Blood using Cobalt 58',
        price: 92.89,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      },
      {
        id: 18,
        name: 'Green Tea Refresher',
        description:
          'Fusion of Left Hip Joint with Ext Fix, Perc Endo Approach',
        price: 68.03,
        image: 'http://dummyimage.com/300x300.png/dddddd/000000',
      },
      {
        id: 19,
        name: 'Beef - Striploin',
        description: 'Excision of Left Elbow Joint, Open Approach',
        price: 4.04,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 20,
        name: 'Salt And Pepper Mix - White',
        description:
          'Supplement Right Pelvic Bone with Autol Sub, Open Approach',
        price: 15.31,
        image: 'http://dummyimage.com/300x300.png/dddddd/000000',
      },
      {
        id: 21,
        name: 'Wine - White, Schroder And Schyl',
        description: 'Repair Left Ovary, Percutaneous Approach',
        price: 34.26,
        image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
      },
      {
        id: 22,
        name: 'Cheese - Cottage Cheese',
        description:
          'Drainage of Left Maxilla, Percutaneous Endoscopic Approach',
        price: 4.44,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
      {
        id: 23,
        name: 'Wine - White, Pelee Island',
        description: 'Revision of Nonaut Sub in Cisterna Chyli, Open Approach',
        price: 86.02,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 24,
        name: 'Cookie Choc',
        description:
          'Introduction of Serum/Tox/Vaccine into Muscle, Perc Approach',
        price: 43.57,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 25,
        name: 'Lobster - Base',
        description: 'Tomo Nucl Med Imag of Abd using Indium 111',
        price: 64.24,
        image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
      },
      {
        id: 26,
        name: 'Salt - Celery',
        description: 'Insertion of Monitor Dev into R Diaphragm, Open Approach',
        price: 46.49,
        image: 'http://dummyimage.com/300x300.png/dddddd/000000',
      },
      {
        id: 27,
        name: 'Wine - Bouchard La Vignee Pinot',
        description:
          'Dilation of R Renal Vein with Intralum Dev, Open Approach',
        price: 25.47,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
      {
        id: 28,
        name: 'Bread Cranberry Foccacia',
        description: 'Suture Removal from Upper Extremity',
        price: 54.14,
        image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
      },
    ];
  }
}
