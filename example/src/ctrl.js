function appCtrl ($scope) {
  $scope.entity = {}

  $scope.list = [
    {
      name: 'João da Silva',
      date: Date.now(),
      value: 150.50
    }
  ]

  $scope.addList = ($event, entity) => {
    $event.preventDefault()
    $scope.list.push(entity)
    $scope.entity = {}
  }

  $scope.removeItem = (index) => {
    $scope.list.splice(index, 1)
  }

  /**
   * @param {Date} date
   */
  $scope.dataFormat = (date) => {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
  }

  /**
   * @param {number} value
   */
  $scope.valueFormat = (value) => {
    const opt = { style: 'currency', currency: 'BRL' }
    return new Intl.NumberFormat('pt-BR', opt).format(value)
  }
}

appCtrl.$inject = ['$scope']

export default appCtrl
