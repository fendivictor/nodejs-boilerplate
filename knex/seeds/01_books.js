exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("Book")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Book").insert([
        {
          id: 1,
          judul: "Membuat Website Dengan NodeJs",
          sinopsis: "Buku belajar membuat website dengan menggunakan NodeJS",
          penulis: "Buda Suyasa",
        },
        {
          id: 2,
          judul: "Web Design Dengan CSS 3 dan Bootstrap 4",
          sinopsis:
            "Buku belajar membuat desain website dengan CSS3 dan framework CSS Bootstrap",
          penulis: "Aditya Sudirman",
        },
        {
          id: 3,
          judul: "Jadi Penulis Blog dengan Wordpress",
          sinopsis:
            "Buku tutorial membuat blog dengan menggunakan CMS Wordpress",
          penulis: "Gayatri",
        },
        {
          id: 4,
          judul: "Permak Foto dengan Adobe Photoshop",
          sinopsis:
            "Buku belajar Adobe Photoshop untuk melakukan editing gambar.",
          penulis: "Ilham",
        },
      ]);
    });
};
