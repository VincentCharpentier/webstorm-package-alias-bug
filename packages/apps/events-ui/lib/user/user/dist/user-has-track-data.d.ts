import type { LoggedUser } from '@authentication-lib/user';
import type { TRACK } from '@events-ui/constants';
export declare const hasTrackData: (track: TRACK, user: LoggedUser) => boolean;
export declare const userHasTrackData: (track: TRACK) => boolean;
