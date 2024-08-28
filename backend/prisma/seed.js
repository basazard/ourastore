const prisma = require('../src/db');
const { nanoid } = require('nanoid');

const serviceData = [
  ['TU_ML','Top Up MLBB','TUG'],
  ['TU_ML_IRIT','Top Up MLBB Irit','TUG'],
  ['TU_PUBG','Top Up PUBG','TUG'],
  ['TU_HOK','Top Up HOK','TUG'],
  ['TU_FF','Top Up Free Fire','TUG'],
  ['TU_FF_MAX','Top Up Free Fire Max','TUG'],
  ['TU_PB','Top Up Point Blank','TUG'],
  ['TU_MS','Top Up Metal Slug','TUG'],
  ['TU_EP','Top Up Egg Party','TUG'],
  ['TU_CODM','Top Up Call of Duty Mobile','TUG'],
  ['TU_VALO','Top Up Valorant','TUG'],
  ['TU_LOL_WR','Top Up League of Legends Wild Rift','TUG'],
  ['JK_ECER','Joki Eceran','JK_ML'],
  ['JK_PKT_MCL','Joki Paketan dan MCL','JK_ML'],
  ['JK_GDG','Joki Gendong','JK_ML'],
  ['JK_MC','Joki Magic Chess','JK_ML'],
  ['JK_CL','Joki Classic','JK_ML'],
]

const getRandomValue = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const storageData = [
  [getRandomValue(50000,100000), 'TU_ML'],
  [getRandomValue(50000,100000), 'TU_ML_IRIT'],
  [getRandomValue(50000,100000), 'TU_PUBG'],
  [getRandomValue(50000,100000), 'TU_HOK'],
  [getRandomValue(50000,100000), 'TU_FF'],
  [getRandomValue(50000,100000), 'TU_FF_MAX'],
  [getRandomValue(50000,100000), 'TU_PB'],
  [getRandomValue(50000,100000), 'TU_MS'],
  [getRandomValue(50000,100000), 'TU_EP'],
  [getRandomValue(50000,100000), 'TU_CODM'],
  [getRandomValue(50000,100000), 'TU_VALO'],
  [getRandomValue(50000,100000), 'TU_LOL_WR']
]

initialDB = async () => {
  await prisma.service.deleteMany({});
  await prisma.category.deleteMany({});
  
  const category = await prisma.category.createMany({
    data : [
      {
        id : 'TUG',
        description : 'Top Up Games'
      },
      {
        id : 'JK_ML',
        description : 'Joki MLBB'
      }
    ]
  });

  const service = await prisma.service.createMany({
    data : serviceData.map((data) => ({
      id : data[0],
      description : data[1],
      categoryId : data[2]
    }))
  })

  const storage = await prisma.storage.createMany({
    data : storageData.map((data) => ({
      id : nanoid(16),
      stock : data[0],
      serviceId : data[1]
    }))
  })

  await prisma.$disconnect();
  console.log("Seed Successfull");
};

initialDB();

