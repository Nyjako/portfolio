export function Skills() {
  return (
    <>
      {" "}
      <table className="data-table table-fixed rounded-md border-slate-600 border-4">
        <tr>
          <th className="data-table-header border-4 border-slate-600">
            Language
          </th>
          <th className="data-table-header border-4 border-slate-600">Level</th>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">C</td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(1)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">C++</td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(2)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">C#</td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(1)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            JavaScript
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            TypeScript
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            Python
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(1)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            CSS & HTML
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">Rust</td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(1)}
          </td>
        </tr>
      </table>
      <table className="data-table table-fixed rounded-md border-slate-600 border-4 flex-grow">
        <tr>
          <th className="data-table-header border-4 border-slate-600">
            Technology
          </th>
          <th className="data-table-header border-4 border-slate-600">Level</th>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            NodeJs
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            MySQL
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            ReactJS
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(2)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            Tailwind
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            NextJS
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(2)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            NuxtJS
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(1)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            express
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            Prisma
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(4)}
          </td>
        </tr>
      </table>
      <table className="data-table table-fixed rounded-md border-slate-600 border-4">
        <tr>
          <th className="data-table-header border-4 border-slate-600">Tool</th>
          <th className="data-table-header border-4 border-slate-600">Level</th>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">Git</td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            ESLint
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(3)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            Postman
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(4)}
          </td>
        </tr>
        <tr>
          <td className="data-table-content border-2 border-slate-600">
            CMake
          </td>
          <td className="data-table-content border-2 border-slate-600">
            {circle(1)}
          </td>
        </tr>
      </table>
    </>
  );
}

function circle(filled: number): JSX.Element {

  let empty = 5 - filled;
  let data: Array<JSX.Element> = [];

  for (let i = 0; i < filled; i++) {
    data.push(
      <svg height="1em" width="1em">
        <circle cx="0.5em" cy="0.5em" r="0.4em" stroke="currentColor" stroke-width="2" fill="currentColor" />
      </svg>
    )
  }

  for (let i = 0; i < empty; i++) {
    data.push(
      <svg height="1em" width="1em">
        <circle cx="0.5em" cy="0.5em" r="0.4em" stroke="currentColor" stroke-width="2" fill="transparent"/>
      </svg>
    )
  }

  return (
    <div className='flex gap-0.5'>
      {data}
    </div>
  );
}