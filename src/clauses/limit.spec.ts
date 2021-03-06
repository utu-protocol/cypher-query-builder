import neo4jDriver from 'neo4j-driver';
import { expect } from 'chai';
import { Limit } from './limit';

describe('Limit', () => {
  describe('#build', () => {
    it('should add a produce a limit clause', () => {
      const query = new Limit(10);
      expect(query.build()).to.equal('LIMIT $limitCount');
      expect(query.getParams()).to.eql({ limitCount: neo4jDriver.int(10) });
    });
  });
});
