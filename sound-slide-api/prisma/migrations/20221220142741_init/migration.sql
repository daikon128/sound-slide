-- CreateTable
CREATE TABLE `SoundSlide` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `soundId` INTEGER NOT NULL,
    `slideId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
