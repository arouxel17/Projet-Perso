-- Active: 1671102388306@@127.0.0.1@3306@surfcp
USE `surfcp` ;
DROP TABLE IF EXISTS `surfcp`.`conditions`;

DROP TABLE IF EXISTS `surfcp`.`spots`;

-- -----------------------------------------------------
-- Table `surfcp`.`conditions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `surfcp`.`conditions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vagues` VARCHAR(45) NOT NULL,
  `houles` VARCHAR(45) NOT NULL,
  `periodes` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `surfcp`.`spots`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `surfcp`.`spots` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `lieu` VARCHAR(45) NOT NULL,
  `difficulte` VARCHAR(45) NOT NULL,
  `image` VARCHAR(1000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `conditions_id` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `surfcp`.`conditions`
-- -----------------------------------------------------
INSERT INTO
  `conditions`(
    `vagues`,
    `houles`,
    `periodes`
  )
VALUES
  (
    '0,3m - 0,4m',
    '0,4m',
    '12s'
  ),
  (
    '0,5m - 0,6m',
    '0,6m',
    '14s'
  ),
  (
    '0,7m - 0,8m',
    '0,8m',
    '15s'
  ),
  (
    '1,0m - 1,2m',
    '1,1m',
    '12s'
  ),
   (
    '1,1m - 1,2m',
    '1,1m',
    '14s'
  ),
  (
    '1,5m - 1,6m',
    '1,5m',
    '14s'
  ),
  (
    '2,0m - 2,1m',
    '2,0m',
    '11s'
  ),
  (
    '3,0m - 3,2m',
    '3,5m',
    '9s'
  );

  -- -----------------------------------------------------
-- Data for table `surfcp`.`spots`
-- -----------------------------------------------------
INSERT INTO
  `spots`(
    `nom`,
    `lieu`,
    `difficulte`,
    `image`,
    `description`,
    `conditions_id`
  )
VALUES
(
  "Les Grenettes", 
  "Sainte-Marie-De-Ré",
  "Debutant",
  "https://images.pexels.com/photos/416726/pexels-photo-416726.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "A proximité de La Rochelle, le spot des Grenettes, sur le hameau de La Noue à l\’ouest de Sainte-Marie-de-Ré, est particulièrement fréquenté. Face aux falaises et à la petite plage accessible lorsque la marée l\’accorde, les vagues généralement molles et parfois creuses peuvent atteindre 2,50 mètres de hauteur. Un spot qui intéresse également par la qualité de l\’eau mais qui exige une certaine dextérité, rochers et caillasses pouvant représenter un danger.",
  1
),
(
  "La pointe du Lizay", 
  "Les Portes-en-Ré",
  "Expert",
  "https://images.pexels.com/photos/2050955/pexels-photo-2050955.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "A l\’extrémité nord de l\’île de Ré, la pointe du Lizay est certainement le spot le plus puissant de l\’île, avec des vagues pouvant atteindre 150 mètres de long et 2,50 mètres de hauteur. Tout comme Diamond Head et le petit Bec, le site fait partie de la Conche des Baleines, cette grande baie délimitée à l\’est par la pointe du Lizay et à l\’ouest par la pointe des Baleines. Un spot prisé pour ses plages bordées par des dunes, une forêt de pins maritimes et quelques vestiges du Mur de l\’Atlantique.",
  7
),
(
  "Le petit Bec", 
  "Les Portes-en-Ré",
  "Expert",
  "https://images.pexels.com/photos/2103783/pexels-photo-2103783.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Sur la côte nord de l\’île de Ré, la commune des Portes-en-Ré est particulièrement sollicitée par les surfeurs, les kitesurfeurs et les windsurfeurs avec des spots mondialement réputés comme Diamond Head, le Lizay et le petit Bec. A marée montante et portées par une houle nord/nord-ouest, les vagues peuvent ici atteindre 150 mètres de long et 2 mètres de hauteur. Un paradis pour les amateurs de sports de glisse, le spot comptant parmi les plus belles plages de l\’île.",
  7
),
(
  "La côte Sauvage", 
  "La Tremblade",
  "Intermediaire",
  "https://images.pexels.com/photos/1644724/pexels-photo-1644724.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Direction La Tremblade, sur la côte ouest de la presqu\’île d\’Arvert, la côte sauvage est un véritable paradis pour les surfeurs. Avec ses longues étendues de sable, ses dunes et ses pinèdes, le site est parfaitement exposé à la houle et à l\’assaut des vagues de l\’Atlantique. Logée entre la Pointe Espagnole au nord et la pointe de la Coubre au sud, la côte sauvage est incontournable pour tous les amateurs de sensations fortes.",
  5
),
(
  "Vert Bois", 
  "Saint-Trojan",
  "Debutant",
  "https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Dans le sud-ouest de l\’île d\’Oléron, au pied de la forêt de Saint-Trojan installée au XIXe siècle pour contenir l\’avancée des dunes, la petite commune du Grand-Village-Plage voit elle aussi défiler les surfeurs. Entre Vert Bois et la plage de Grand-Village, les amateurs de sensations fortes peuvent même venir se frotter à la vague mythique des Allassins. Un spot réputé et incontournable qui attire aussi les passionnés de char à voile et de skimboard.",
  2
),
(
  "Le phare de Chassiron", 
  "Saint-Denis-d\’Oléron",
  "Intermediaire",
  "https://images.pexels.com/photos/2062141/pexels-photo-2062141.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Jadis, le site était redouté par les marins, tant les récifs sont dangereux et les naufrages nombreux. Pour guider les navigateurs et pénétrer dans les eaux du pertuis d\’Antioche sans encombre, un phare a ainsi dû être construit en 1685. Situé à l\’extrémité nord de l\’île d\’Oléron, près de Saint-Denis-d\’Oléron, le spot fait aujourd\’hui le bonheur des surfeurs qui, entre deux vagues, pourront même aller se divertir dans la tour, le musée et les jardins du phare.",
  4
),
(
  "Les Boulassiers", 
  "La Brée-les-Bains",
  "Intermediaire",
  "https://images.pexels.com/photos/1722028/pexels-photo-1722028.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Bien qu\’il ne soit pas parfaitement orienté, puisque opposé à l\’océan Atlantique, le site des Boulassiers est en bonne place sur tous les guides destinés aux surfeurs. Considéré comme un spot de repli, il intéresse par l\’enroulement des fortes houles d\’automne. A défaut, les sportifs pourront toujours aller faire une petite visite à l\’église Notre-Dame de l\’Assomption ou au moulin de La Fontaine, dont la construction date du XVe siècle.",
  5
),
(
  "Les Huttes", 
  "Saint-Denis-d\’Oléron",
  "Debutant",
  "https://images.pexels.com/photos/1324352/pexels-photo-1324352.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Avec ses plages de sable fin, sa base nautique et son port de plaisance, le site attire les touristes mais également les surfeurs, qui iront chercher la vague vers le spot des Huttes, un beach break parfaitement exposé à la houle. Le site est également fréquenté par les amateurs de plongée, de voile, de stand up paddle et de ski nautique.",
  3
);