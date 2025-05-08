
type ListPorps = {
    title:string,
    list:string[]
}

const List = ({ title, list }:ListPorps) => {
    return(<>
        <section className="skills-preview py-5 bg-dark text-white">
            <div className="container text-center">
              <h3 className="mb-4">{title}</h3>
              <div className="row justify-content-center">
                {list.map((element) => (
                  <div key={element} className="col-6 col-sm-4 col-md-3 mb-3">
                    <div className="p-3 bg-secondary text-white rounded shadow-sm">
                      {element}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>
    </>)
}

export default List;