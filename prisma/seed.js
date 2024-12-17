const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create 10 players
  const createPlayers = async () => {
    const players = [
        {name: 'player 1', breed: 'lab', status: 'FIELD'},
        {name: 'player 2', breed: 'lab', status: 'BENCH'},
        {name: 'player 3', breed: 'lab', status: 'FIELD'},
        {name: 'player 4', breed: 'doodle', status: 'FIELD'},
        {name: 'player 5', breed: 'pug', status: 'FIELD'},
        {name: 'player 6', breed: 'stray', status: 'BENCH'},
        {name: 'player 7', breed: 'stray', status: 'BENCH'},
        {name: 'player 8', breed: 'stray', status: 'BENCH'},
        {name: 'player 9', breed: 'mutt', status: 'BENCH'},
        {name: 'player 10', breed:'hound', status:'FIELD'},
    ];
    await prisma.player.createMany({data: players });
  };
  await createPlayers();
};


seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
