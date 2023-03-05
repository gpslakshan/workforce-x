-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workforce-x
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema workforce-x
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workforce-x` DEFAULT CHARACTER SET utf8 ;
USE `workforce-x` ;

-- -----------------------------------------------------
-- Table `workforce-x`.`departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`departments` (
  `dept_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `manager_id` INT NOT NULL,
  PRIMARY KEY (`dept_id`),
  INDEX `fk_departments_employees1_idx` (`manager_id` ASC) VISIBLE,
  CONSTRAINT `fk_departments_employees1`
    FOREIGN KEY (`manager_id`)
    REFERENCES `workforce-x`.`employees` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`positions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`positions` (
  `position_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` MEDIUMTEXT NULL,
  PRIMARY KEY (`position_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`employees` (
  `emp_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `date_of_birth` DATETIME NOT NULL,
  `house_no` VARCHAR(50) NOT NULL,
  `street` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `state` VARCHAR(50) NOT NULL,
  `postcode` VARCHAR(50) NULL,
  `email` VARCHAR(255) NOT NULL,
  `mobile` VARCHAR(50) NOT NULL,
  `salary` DECIMAL(9,2) NOT NULL,
  `department_id` INT NOT NULL,
  `position_id` INT NOT NULL,
  PRIMARY KEY (`emp_id`),
  INDEX `fk_employees_departments_idx` (`department_id` ASC) VISIBLE,
  INDEX `fk_employees_positions1_idx` (`position_id` ASC) VISIBLE,
  CONSTRAINT `fk_employees_departments`
    FOREIGN KEY (`department_id`)
    REFERENCES `workforce-x`.`departments` (`dept_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_employees_positions1`
    FOREIGN KEY (`position_id`)
    REFERENCES `workforce-x`.`positions` (`position_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`clients` (
  `client_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `mobile` VARCHAR(50) NOT NULL,
  `street` VARCHAR(50) NULL,
  `city` VARCHAR(50) NULL,
  `state` VARCHAR(50) NULL,
  `country` VARCHAR(45) NULL,
  PRIMARY KEY (`client_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`projects` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `started_on` DATETIME NOT NULL,
  `end_date` DATETIME NULL,
  `status` VARCHAR(50) NULL DEFAULT 'New',
  `client_id` INT NOT NULL,
  PRIMARY KEY (`project_id`),
  INDEX `fk_projects_clients1_idx` (`client_id` ASC) VISIBLE,
  CONSTRAINT `fk_projects_clients1`
    FOREIGN KEY (`client_id`)
    REFERENCES `workforce-x`.`clients` (`client_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`assignments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`assignments` (
  `emp_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  `assigned_on` DATETIME NOT NULL,
  INDEX `fk_assignments_projects1_idx` (`project_id` ASC) VISIBLE,
  PRIMARY KEY (`emp_id`, `project_id`),
  CONSTRAINT `fk_assignments_employees1`
    FOREIGN KEY (`emp_id`)
    REFERENCES `workforce-x`.`employees` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_assignments_projects1`
    FOREIGN KEY (`project_id`)
    REFERENCES `workforce-x`.`projects` (`project_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`attendances`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`attendances` (
  `attendence_id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `status` VARCHAR(50) NULL,
  `emp_id` INT NOT NULL,
  PRIMARY KEY (`attendence_id`),
  INDEX `fk_attendances_employees1_idx` (`emp_id` ASC) VISIBLE,
  CONSTRAINT `fk_attendances_employees1`
    FOREIGN KEY (`emp_id`)
    REFERENCES `workforce-x`.`employees` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`leaves`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`leaves` (
  `leave_id` INT NOT NULL AUTO_INCREMENT,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `reason` VARCHAR(255) NOT NULL,
  `status` VARCHAR(45) NULL DEFAULT 'Pending',
  `emp_id` INT NOT NULL,
  PRIMARY KEY (`leave_id`),
  INDEX `fk_leaves_employees1_idx` (`emp_id` ASC) VISIBLE,
  CONSTRAINT `fk_leaves_employees1`
    FOREIGN KEY (`emp_id`)
    REFERENCES `workforce-x`.`employees` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workforce-x`.`payrolls`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workforce-x`.`payrolls` (
  `payroll_id` INT NOT NULL AUTO_INCREMENT,
  `period_starts_on` DATETIME NOT NULL,
  `period_ends_on` DATETIME NOT NULL,
  `paid_on` DATETIME NOT NULL,
  `gross_pay` DECIMAL(9,2) NOT NULL,
  `deductions` DECIMAL(9,2) NULL,
  `emp_id` INT NOT NULL,
  PRIMARY KEY (`payroll_id`),
  INDEX `fk_payrolls_employees1_idx` (`emp_id` ASC) VISIBLE,
  CONSTRAINT `fk_payrolls_employees1`
    FOREIGN KEY (`emp_id`)
    REFERENCES `workforce-x`.`employees` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
