class App extends React.Component {
  constructor(props) {
    // Cocok untuk menginisialisasi nilai state
    super(props)
    this.state = {}
  }

  // 1.Fase Mounting
  componentDidMount() {
    // Dipanggil sekali ketika komponen ditambahkan ke DOM.
    // Cocok untuk membuat AJAX request.
  }

  // 2.Fase Updating
  componentDidUpdate() {
    // Dipanggil seketika setelah terdapat pembaruan nilai props atau state.
    // Cocok untuk melakukan AJAX requests yang didasari oleh perubahan nilai props atau state.
  }

  // 3.Fase Unmounting
  componentWillUnmount() {
    // Dipanggil tepat sebelum komponen dihapus dari DOM.
    // Cocok untuk perihal bersih-bersih (cleanup).
  }
  render() {
    return
  }
}