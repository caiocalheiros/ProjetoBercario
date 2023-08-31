-- CreateTable
CREATE TABLE "Bebe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "pesoNascimento" REAL NOT NULL,
    "altura" REAL NOT NULL,
    "idMae" INTEGER NOT NULL,
    "idMedico" INTEGER NOT NULL,
    CONSTRAINT "Bebe_idMae_fkey" FOREIGN KEY ("idMae") REFERENCES "Mae" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mae" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CRM" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefoneCel" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Medico_CRM_key" ON "Medico"("CRM");
