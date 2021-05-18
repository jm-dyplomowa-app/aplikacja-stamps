export interface PromoDTO {
  promoName: string;
  promoDescription: string;

  prizeDescription: string;
  prizeQuantity: number;

  pointsEntry: number;
  pointsRedeem: number;

  vendorId: string;
  vendorEmail: string;
  vendorStoreAddress: string;

  participantsTable: ParticipantDTO[];
  participantsTotal: number;
  pid: string;
  createdOn: string;
  imageRef: string;
}

export interface ParticipantDTO {
  uid: string;
  email: string;
  currentPoints: number;
  joinedOn: string;
  prizeCounter: number;
}
