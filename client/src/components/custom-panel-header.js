// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import KeplerGlLogo from 'kepler.gl/components';

const StyledPanelHeader = styled.div.attrs({
  className: 'side-side-panel__header'
})`
  background-color: ${props => props.theme.sidePanelHeaderBg};
  padding: 12px 16px 0 16px;
`;

const StyledPanelHeaderTop = styled.div.attrs({
  className: 'side-panel__header__top'
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
`;

const LogoTitle = styled.div`
  display: inline-block;
  margin-left: 6px;
`;

const LogoName = styled.div`
  color: ${props => props.theme.activeColor};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.17px;
`;

const LogoVersion = styled.div`
  font-size: 10px;
  color: ${props => props.theme.subtextColor};
  letter-spacing: 0.83px;
  line-height: 14px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const LogoSvgWrapper = styled.div`
  margin-top: 3px;
`;

const LogoSvg = () => (
  <svg
    className="side-panel-logo__logo"
    width="22px"
    height="15px"
    viewBox="0 0 22 15"
  >
    <g transform="translate(11, -3) rotate(45.000000)">
      <rect fill="#535C6C" x="0" y="5" width="10" height="10" />
      <rect fill="#1FBAD6" x="5" y="0" width="10" height="10" />
    </g>
  </svg>
);

export default class CustomPanelHeader extends React.Component {
    static propTypes = {
        appName: PropTypes.string,
        version: PropTypes.string,
        uiState: PropTypes.object,
        uiStateActions: PropTypes.object
    };

    render(){
        const {
            appName,
            version
        } = this.props;

        return (
            <StyledPanelHeader className="side-panel__panel-header">
                <StyledPanelHeaderTop className="side-panel__panel-header__top">
                    <LogoWrapper className="side-panel-logo">
                        <LogoSvgWrapper>
                            <LogoSvg />
                        </LogoSvgWrapper>
                        <LogoTitle className="logo__title">
                            <LogoName className="logo__name">{appName}</LogoName>
                            {version ? <LogoVersion className="logo__version">{version}</LogoVersion> : null}
                        </LogoTitle>
                    </LogoWrapper>
                </StyledPanelHeaderTop>
            </StyledPanelHeader>
        )
    }
}