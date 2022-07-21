'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("Products", [
       {
      namaProduk: "penggaris",
      deskripsi: "penggaris-30cm",
      stok: 10,
      tersedia: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ])

    await queryInterface.bulkInsert("Products", [
      {
     namaProduk: "penghapus",
     deskripsi: "penghapus-karet",
     stok: 0,
     tersedia: false,
     createdAt: new Date(),
     updatedAt: new Date()
    }
   ])
   await queryInterface.bulkInsert("Products", [
      {
     namaProduk: "pensil-kayu",
     deskripsi: "pensil-kayu-2B",
     stok: 2,
     tersedia: true,
     createdAt: new Date(),
     updatedAt: new Date()
    }
   ])
   await queryInterface.bulkInsert("Products", [
      {
     namaProduk: "pensil-mekanik",
     deskripsi: "pensil-mekanik-2B",
     stok: 20,
     tersedia: true,
     createdAt: new Date(),
     updatedAt: new Date()
    }
   ])
   await queryInterface.bulkInsert("Products", [
      {
     namaProduk: "spidol",
     deskripsi: "spidol-permanen",
     stok: 0,
     tersedia: false,
     createdAt: new Date(),
     updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null)
  }
};
