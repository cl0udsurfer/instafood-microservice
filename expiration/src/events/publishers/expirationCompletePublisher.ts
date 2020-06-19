import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@instafood/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
