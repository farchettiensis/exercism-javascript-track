//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

export const translate = (rna) => {
  if (!rna) {
    return [];
  }

  if (/[^AUGC]/.test(rna)) {
    throw new Error('Invalid codon');
  }

  const proteinSequence = [];
  const codons = rna.match(/.{1,3}/g) || [];

  for (const codon of codons) {
    const protein = codonToProtein[codon] ||
      (() => {
        throw new Error('Invalid codon');
      })();

    if (protein === 'STOP') {
      break;
    }

    proteinSequence.push(protein);
  }

  return proteinSequence;
};
