//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  if (!rna) {
    return [];
  }

  // Fails one test
  // if (rna.length % 3 !== 0) {
  //   throw new Error('Invalid codon');
  // }

  if (/[^AUGC]/.test(rna)) {
    throw new Error('Invalid codon');
  }

  const codonToProtein = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };

  const proteinSequence = [];
  const codons = rna.match(/.{1,3}/g) || [];

  for (const codon of codons) {
    if (!codonToProtein[codon]) {
      throw new Error('Invalid codon');
    }

    if (codonToProtein[codon] === 'STOP') {
      break;
    }

    proteinSequence.push(codonToProtein[codon]);
  }

  return proteinSequence;
};