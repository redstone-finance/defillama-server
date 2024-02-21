import { ProtocolType } from "@defillama/dimension-adapters/adapters/types"
import { IImportObj } from "../../cli/buildRequires"
import { Protocol } from "../../protocols/types"
import { ICleanRecordsConfig } from "../handlers/helpers/generateCleanRecords"

export interface ProtocolAdaptor extends Protocol {
    defillamaId: string
    displayName: string
    config?: IConfig
    disabled: boolean
    enabled?: boolean
    protocolType?: ProtocolType
    versionKey?: string
    methodologyURL: string
    methodology?: string | IJSON<string>
    allAddresses?: Array<string>
    startFrom?: number
}

export interface IConfig {
    id: string
    parentId?: string
    latestFetchIsOk?: boolean
    enabled?: boolean
    includedVolume?: string[]
    startFrom?: number
    disabled?: boolean
    displayName?: string
    cleanRecordsConfig?: ICleanRecordsConfig
    isChain?: boolean
    protocolsData?: IJSON<Omit<IConfig, 'protocolsData'>>,
}


export interface IJSON<T> {
    [key: string]: T
}

export type AdaptorsConfig = IJSON<IConfig>

export type AdaptorData = {
    default: ProtocolAdaptor[]
    importModule: (module: string) => IImportObj['module']
    KEYS_TO_STORE: IJSON<string>
    config: IJSON<IConfig>
    dimensionRules?: IJSON<(extraDimensions: IJSON<number | null>, category: string) => void>
}