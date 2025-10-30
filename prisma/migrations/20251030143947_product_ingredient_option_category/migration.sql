/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "public"."Post";

-- DropTable
DROP TABLE "public"."Post2";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "titleUK" TEXT NOT NULL,
    "titleEN" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "titleUK" TEXT NOT NULL,
    "titleEN" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "required" BOOLEAN NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "titleUK" TEXT NOT NULL,
    "titleEN" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "parentCategoryId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IngredientToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IngredientToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_IngredientToOption" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IngredientToOption_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_OptionToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_OptionToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CategoryToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "_IngredientToProduct_B_index" ON "_IngredientToProduct"("B");

-- CreateIndex
CREATE INDEX "_IngredientToOption_B_index" ON "_IngredientToOption"("B");

-- CreateIndex
CREATE INDEX "_OptionToProduct_B_index" ON "_OptionToProduct"("B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToProduct" ADD CONSTRAINT "_IngredientToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToProduct" ADD CONSTRAINT "_IngredientToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToOption" ADD CONSTRAINT "_IngredientToOption_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToOption" ADD CONSTRAINT "_IngredientToOption_B_fkey" FOREIGN KEY ("B") REFERENCES "Option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionToProduct" ADD CONSTRAINT "_OptionToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionToProduct" ADD CONSTRAINT "_OptionToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
