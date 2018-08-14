import * as React from 'react';

type TabDataType = {
  title: string,
  content: string,
};

export interface TabProps {
  tabs: TabDataType[],
  selected?: string
  align?: 'center' | 'right'
}
export class Tab extends React.Component<TabProps,
{ tabs: TabDataType[], selected: string, align: string }> {
  constructor(props: TabProps) {
    super(props);
    const { tabs, selected, align } = props;
    let tabAlign = '';
    if (align) {
      if (align === 'center') {
        tabAlign += ' center';
      } else if (align === 'right') {
        tabAlign += ' right';
      }
    }
    this.state = {
      tabs,
      selected,
      align: tabAlign,
    };
  }

  eventHandler(e: any, i: string) {
    e.preventDefault();
    console.log(i);
    this.setState({ selected: i });
  }

  render() {
    let labels: string[] = [];
    let contents: string[] = [];
    this.state.tabs.forEach((tab: any) => {
      labels = [...labels, tab.title];
      contents = [...contents, tab.content];
    });
    const className = 'cdt-tab' + this.state.align;
    return (
      <div className={className}>
        <ul>
          {labels.map((label, i) =>
            <li onClick={e => this.eventHandler(e, i + '')}
            key={i} className={(i === parseInt(this.state.selected, 10)) ? 'selected' : ''}>
              <a href='#0'>{label}</a>
            </li>)}
        </ul>
        <div className='tabs-content'>
          {contents.map((content, i) => (i === parseInt(this.state.selected, 10)
                ? <div key={i} style={{ display: 'block' }}>{content}</div> : null))}
        </div>
      </div>
    );
  }
}
