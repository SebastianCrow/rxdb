import type { RxCollectionCreator, RxDatabaseCreator } from '../../types';
/**
 * if the name of a collection
 * clashes with a property of RxDatabase,
 * we get problems so this function prohibits this
 */
export declare function ensureCollectionNameValid(args: RxCollectionCreator & {
    name: string;
}): void;
export declare function ensureDatabaseNameIsValid(args: RxDatabaseCreator<any, any>): void;
