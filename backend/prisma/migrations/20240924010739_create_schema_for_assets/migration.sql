-- CreateTable
CREATE TABLE "Assets" (
    "id" TEXT NOT NULL,
    "assetName" TEXT NOT NULL,
    "assetUrl" TEXT NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Assets_assetName_key" ON "Assets"("assetName");
