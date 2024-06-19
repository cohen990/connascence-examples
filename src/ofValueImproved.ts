{
    class SystemA {
        getHeatPumpPrice = () => {
            return SystemC.getHeatPumpPrice()
        }
    }

    class SystemB {
        getHeatPumpPrice = () => {
            return SystemC.getHeatPumpPrice()
        }
    }

    class SystemC {
        static getHeatPumpPrice = () => {
            return 10.50
        }
    }
}