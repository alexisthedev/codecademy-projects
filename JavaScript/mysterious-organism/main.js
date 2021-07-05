// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // <-- My solution -->
  const pAequorFactory = (num, arr) => {
    return {
      specimenNum: num, // Identification number exclusive to only one specimen/organism
      dna: arr, // 15-element array consisting of the characters: A, T, C, G that represent the bases of DNA
  
      mutate() { // Selects a random character of the dna array and replaces is it with a random base
        this.dna[Math.floor(Math.random() * 15)] = returnRandBase();
      },
  
      compareDNA(obj) { // Compares to dna arrays of the calling and given object (this.dna and obj.dna)
        let sum = 0;
  
        for(let i=0; i<15; i++) {
          if(this.dna[i] === obj.dna[i]) sum++;
        }
        let percentage = sum/0.15; // Calculates the percentage at which the two DNA arrays are identical through [percentage = (VALUE/TOTAL) * 100%]
        console.log(`Specimen #1 and specimen #2 have ${percentage.toFixed(2)}% DNA in common.`);
      },
  
      willLikelySurvive() { // Calculates the probability of an organism surviving (ie. that at least 60% of its dna array consists of 'C' or 'G' characters)
        let sum = 0;
  
        for(let i=0; i<15; i++) {
          if(this.dna[i] === 'C' || this.dna[i] === 'G') sum++;
        }
  
        if(sum/0.15 >= 60) return true;
        return false;
      }
    }
  }
  
  let samples = [];
  for(let i=1; i<=30; i++) { // Creates 30 randomly generated organism objects and pushes them into an array
    samples.push(pAequorFactory(i, mockUpStrand()));
  }