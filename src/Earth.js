export class Earth {

  constructor (birthdate, deathDate)
  {
    this.birthdate=birthdate;
    this.currentDate=new Date();
    this.deathDate=deathDate
  }

  BirthdateInSeconds() {
    let birth = this.birthdate.getTime();
    return birth;
  }

  CurrentDateInSeconds() {
    let now = this.currentDate.getTime()/1000;
    return now;
  }

  GetAgeInSeconds() {
    let now = this.currentDate.getTime()/1000;
    let birth = this.birthdate.getTime()/1000;
    let ageInSeconds = now - birth;

    return ageInSeconds;
  }

  AgeOnEarth(birth) {
    let now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    let ageInSeconds = now - birth;

    let ageInYears = Math.floor(ageInSeconds * (1/365.25) * (1/24) * (1/60) * (1/60));

    return ageInYears;
  }

  //one earth yr = 87.97 mercury yr
  AgeOnMercury(birth) {
    let now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    let ageInSeconds = now - birth;

    let ageInMercuryYears = Math.floor(ageInSeconds * (1/87.97) * (1/24) * (1/60) * (1/60));

    return ageInMercuryYears;
  }

  //one earth yr = 87.97 venus yr
  AgeOnVenus(birth) {
    let now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    let ageInSeconds = now - birth;

    let ageInMercuryYears = Math.floor(ageInSeconds * (1/224.7) * (1/24) * (1/60) * (1/60));

    return ageInMercuryYears;
  }

  //one earth yr = 1.88 mars yr
  AgeOnMars(birth) {
    let now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    let ageInSeconds = now - birth;

    let ageInMarsYears = Math.floor(ageInSeconds * (1/686.67) * (1/24) * (1/60) * (1/60));

    return ageInMarsYears;
  }

  //one earth yr = 1.88 jupiter yr
  AgeOnJupiter(birth) {
    let now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    let ageInSeconds = now - birth;

    let ageInJupiterYears = Math.floor(ageInSeconds * (1/4331.865) * (1/24) * (1/60) * (1/60));

    return ageInJupiterYears;
  }

  DeathOnJupiter(dateOfDeath) {
    dateOfDeath = Math.floor(this.deathDate / 11.8618);
  }
  DeathOnEarth(dateOfDeath) {
    dateOfDeath = this.deathDate;
  }
  DeathOnVenus(dateOfDeath) {
    dateOfDeath = Math.floor(this.deathDate / 0.6152);
  }
  DeathOnMercury(dateOfDeath) {
    dateOfDeath = Math.floor(this.deathDate / 0.241);
  }
  DeathOnMars(dateOfDeath) {
    dateOfDeath = Math.floor(this.deathDate / 1.8809);
  }
}
