-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "customerName" TEXT,
    "customerPhoneNumber" INTEGER,
    "carPlate" TEXT NOT NULL,
    "carBrand" TEXT,
    "carModel" TEXT NOT NULL,
    "carYear" INTEGER,
    "carModelYear" INTEGER,
    "carColor" TEXT,
    "carEngine" INTEGER,
    "employee" TEXT,
    "totalPrice" INTEGER NOT NULL DEFAULT 0,
    "serviceDone" TEXT NOT NULL DEFAULT '',
    "entryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hasWarranty" BOOLEAN NOT NULL DEFAULT false,
    "warrantyExpires" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
