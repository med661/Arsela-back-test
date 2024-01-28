-- CreateTable
CREATE TABLE "DraggableItem" (
    "id" SERIAL NOT NULL,
    "identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" JSONB NOT NULL,
    "form" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "color" TEXT NOT NULL,
    "parentId" INTEGER,
    "pageId" INTEGER NOT NULL,

    CONSTRAINT "DraggableItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DraggableItem_identifier_key" ON "DraggableItem"("identifier");

-- AddForeignKey
ALTER TABLE "DraggableItem" ADD CONSTRAINT "DraggableItem_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "DraggableItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DraggableItem" ADD CONSTRAINT "DraggableItem_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
