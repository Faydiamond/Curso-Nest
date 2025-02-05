-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lasttname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);
